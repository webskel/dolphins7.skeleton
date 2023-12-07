class Twenty::Command::Up < Twenty::Command
  set_banner usage: "twenty up [OPTIONS]",
             description: "Start the twenty web server"

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command
  end

  private

  def run_command
    warn "[twenty] up..."
  end
end
