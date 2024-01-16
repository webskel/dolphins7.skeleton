# frozen_string_literal: true

class Twenty::Command::Up < Twenty::Command
  set_banner usage: "twenty up [OPTIONS]",
             description: "Start the twenty web server"
  include CommonOptionMixin
  prepend Twenty::Command::MigrationMixin
  prepend Twenty::Command::SQLiteMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    server = Twenty::Servlet.server
    trap(:SIGINT) { server.shutdown }
    server.start
  end
end
