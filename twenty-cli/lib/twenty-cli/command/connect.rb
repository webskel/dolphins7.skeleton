class Twenty::Command::Connect < Twenty::Command
  set_banner usage: "twenty connect [OPTIONS]",
             description: "Connect a project to twenty"

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    Twenty::Connection.new(
      name: File.basename(Dir.getwd),
      path: Dir.getwd,
    ).save!
  end
end
