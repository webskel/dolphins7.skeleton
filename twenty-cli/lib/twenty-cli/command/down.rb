# frozen_string_literal: true

class Twenty::Command::Down < Twenty::Command
  set_banner usage: "twenty down [OPTIONS]",
             description: "Stop the twenty web server"
  prepend Twenty::Command::SQLiteConnectionMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    warn "[twenty] down..."
  end
end
