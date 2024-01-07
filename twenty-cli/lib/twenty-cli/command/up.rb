# frozen_string_literal: true

class Twenty::Command::Up < Twenty::Command
  set_banner usage: "twenty up [OPTIONS]",
             description: "Start the twenty web server"
  set_option "-d PATH",
             "--database PATH",
             "The path to an alternate SQLite3 database",
             as: String,
             default: nil
  extend Twenty::Command::PendingMigrationMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    path = options.database || Twenty::Model.database
    Twenty::Model.connect(path:)
    server = Twenty::Servlet.server
    trap(:SIGINT) { server.shutdown }
    server.start
  end
end
