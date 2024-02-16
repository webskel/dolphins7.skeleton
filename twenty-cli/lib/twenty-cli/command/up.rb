# frozen_string_literal: true

class Twenty::Command::Up < Twenty::Command
  set_banner usage: "twenty up [OPTIONS]",
             description: "Start the twenty web server"
  set_option "-b ADDR",
             "--bind ADDR",
             "Bind to ADDR (default: 127.0.0.1)",
             default: "127.0.0.1"
  set_option "-p PORT",
             "--port PORT",
             "Listen on PORT (default: 2020)",
             default: 2020,
             as: Integer

  include CommonOptionMixin
  prepend Twenty::Command::MigrationMixin
  prepend Twenty::Command::SQLiteMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    server = Twenty::Servlet.server(options)
    trap(:SIGINT) { server.shutdown }
    server.start
  end
end
