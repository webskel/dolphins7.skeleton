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
  set_option "-b",
             "--background",
             "Run the web server in the background",
             default: false

  include CommonOptionMixin
  prepend Twenty::Command::MigrationMixin
  prepend Twenty::Command::SQLiteMixin
  prepend Twenty::Command::RescueMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    server = Twenty::Servlet.server(options)
    options.background ? server.start! : server.start
  rescue Interrupt
    server.shutdown
  end
end
