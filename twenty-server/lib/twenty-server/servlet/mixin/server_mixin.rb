# frozen_string_literal: true

module Twenty::Servlet::ServerMixin
  ##
  # @param [Hash] cli_options
  #  CLI options merged into
  #  {ServerMixin#server_options ServerMixin#server_options}.
  #
  # @return [WEBrick::HTTPServer]
  #  Returns an instance of WEBrick::HTTPServer.
  def server(cli_options = {})
    server = WEBrick::HTTPServer.new server_options(cli_options)
    server.mount "/graphql", Twenty::Servlet::GraphQL
    server
  end

  ##
  # @return [Hash<Symbol, String>]
  #  The default server options given to WEBrick::HTTPServer.new.
  def server_options(cli_options)
    {
      DocumentRoot: Twenty.build,
      BindAddress: cli_options.bind,
      Port: cli_options.port
    }
  end
end
