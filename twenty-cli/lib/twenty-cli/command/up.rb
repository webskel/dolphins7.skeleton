# frozen_string_literal: true

class Twenty::Command::Up < Twenty::Command
  set_banner usage: "twenty up [OPTIONS]",
             description: "Start the twenty web server"
  set_option "-b ADDR",
             "--bind ADDR",
             "An address to bind to (default: 127.0.0.1)",
             default: "127.0.0.1"
  set_option "-p PORT",
             "--port PORT",
             "A port to listen on (default: 2020)",
             default: 2020,
             as: Integer
  set_option "-f",
             "--fork",
             "Run the web server in the background",
             default: false

  include CommonOptionMixin
  prepend Twenty::Command::MigrationMixin
  prepend Twenty::Command::SQLiteMixin
  prepend Twenty::Command::RescueMixin

  def run
    options = parse_options(argv)
    run_command(options)
  end

  private

  def run_command(options)
    server = Twenty::Servlet.server(options)
    options.fork ? server.start! : server.start
  rescue Interrupt
    server.shutdown
  end
end
