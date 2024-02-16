# frozen_string_literal: true

module Twenty::Servlet::ServerMixin
  ##
  # @param [Hash] options
  #  Server options that take precedence over
  #  {ServerMixin#server_options ServerMixin#server_options}.
  #
  # @return [WEBrick::HTTPServer]
  #  Returns an instance of WEBrick::HTTPServer.
  def server(options = {})
    server = WEBrick::HTTPServer.new server_options.merge(options)
    server.mount "/graphql", Twenty::Servlet::GraphQL
    server
  end

  ##
  # @return [Hash<Symbol, String>]
  #  The default server options given to WEBrick::HTTPServer.new.
  def server_options
    {
      DocumentRoot: Twenty.build,
      BindAddress: "127.0.0.1",
      Port: 2020
    }
  end
end
