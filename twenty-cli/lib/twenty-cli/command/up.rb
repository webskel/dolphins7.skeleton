class Twenty::Command::Up < Twenty::Command
  set_banner usage: "twenty up [OPTIONS]",
             description: "Start the twenty web server"
  prepend Twenty::Command::PendingMigrationMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command
  end

  private

  def run_command
    server = Twenty::Servlet.server
    trap(:SIGINT) { server.shutdown }
    server.start
  end
end
