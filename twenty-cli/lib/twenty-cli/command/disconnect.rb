# frozen_string_literal: true

class Twenty::Command::Disconnect < Twenty::Command
  set_banner usage: "twenty disconnect [OPTIONS]",
             description: "Disconnect a project from twenty"
  prepend Twenty::Command::PendingMigrationMixin
  prepend Twenty::Command::SQLiteConnectionMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    warn "[twenty] disconnect..."
  end
end
