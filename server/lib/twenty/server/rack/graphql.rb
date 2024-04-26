# frozen_string_literal: true

module Twenty::Rack
  module GraphQL
    ##
    # Extends {Server::Dir Server::Dir} (a static file
    # Rack application) with a /graphql endpoint
    #
    # @param [Hash] env
    #  Environment hash
    #
    # @return [Array<Integer, Hash, #each>]
    #  Returns a response
    def call(env)
      req = Rack::Request.new(env)
      if req.post? &&
          req.path == "/graphql"
        params = JSON.parse(req.body.string)
        result = Twenty::GraphQL::Schema.execute(
          params["query"],
          variables: params["variables"],
          context: {}
        )
        [200, {"content-type" => "application/json"}, [result.to_json]]
      else
        super(env)
      end
    end
    Server::Dir.prepend(self)
  end
end
