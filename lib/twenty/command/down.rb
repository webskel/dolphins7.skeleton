class Twenty::Command::Down < Twenty::Command
  set_banner usage: "twenty down [OPTIONS]",
             description: "Stop the twenty web server"

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command
  end

  private

  def run_command
    warn "[twenty] down..."
  end
end
