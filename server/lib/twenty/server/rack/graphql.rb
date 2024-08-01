# frozen_string_literal: true

module Twenty::Rack
  module GraphQL
    extend self
    STATIC  = [%r|/static|, %r|/favicon.ico|]

    ##
    # @param [Hash] env
    #  Environment hash
    # @return [[Integer, Hash, #each]
    #  Returns a response
    def call(env)
      req = Rack::Request.new(env)
      if req.post?
        graphql(req)
      elsif req.get? || req.head?
        file(req)
      else
        [404, {}, "".each_line]
      end
    end

    private

    def graphql(req)
      if req.path =~ %r|/graphql|
        params = JSON.parse(req.body.string)
        body = Twenty::GraphQL::Schema.execute(
          params["query"],
          variables: params["variables"],
          context: {}
        ).to_json
        head = { "content-length" => body.bytesize, "content-type" => "application/json" }
        [200, head, body.each_line]
      else
        body = { errors: ["Request path was not found"] }.to_json
        head = { "content-length" => body.bytesize, "content-type" => "application/json" }
        [404, {}, body.each_line]
      end
    end

    def file(req)
      if STATIC.find { req.path =~ _1 }
        dir = Server::Dir.new(Twenty.build)
        dir.call(req.env)
      else
        path = File.join(Twenty.build, "index.html")
        body = File.binread(path)
        head = { "content-length" => body.bytesize, "content-type" => "text/html" }
        [200, head, body.each_line]
      end
    end
  end
end
