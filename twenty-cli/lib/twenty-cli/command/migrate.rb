class Twenty::Command::Migrate < Twenty::Command
  set_banner usage: "twenty migrate [OPTIONS]",
             description: "Migrate the database"

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command
  end

  private

  def run_command
    Twenty::Migration.run!
  end
end
