class Twenty::Command::Disconnect < Twenty::Command
  set_banner usage: "twenty disconnect [OPTIONS]",
             description: "Disconnect a project from twenty"

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command
  end

  private

  def run_command
    warn "[twenty] disconnect..."
  end
end
