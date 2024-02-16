# frozen_string_literal: true

module Twenty::Servlet::ServerMixin
  ##
  # This module extends an instance of WEBrick::HTTPServer
  # with daemon support.
  module Daemon
    include Twenty::Path

    ##
    # Starts a webrick server in the background.
    # @return [void]
    def start!
      Process.daemon
      File.binwrite(pidfile, Process.pid.to_s)
      start
    ensure
      FileUtils.rm(pidfile)
    end
  end

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
    server.extend(Daemon)
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
