class Twenty::Command::Up < Twenty::Command
  set_banner usage: "twenty up [OPTIONS]",
             description: "Start the twenty web server"

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command
  end

  private

  def run_command
    server = WEBrick::HTTPServer.new(server_options)
    server.mount '/connections.json', Twenty::Servlet::Connections
    trap(:SIGINT) { server.shutdown }
    server.start
  end

  def server_options
    {
      DocumentRoot: Twenty.build,
      BindAddress: "127.0.0.1",
      Port: 7778
    }
  end
end
