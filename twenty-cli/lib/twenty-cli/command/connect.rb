# frozen_string_literal: true

class Twenty::Command::Connect < Twenty::Command
  set_banner usage: "twenty connect [OPTIONS]",
             description: "Connect a project to twenty"
  prepend Twenty::Command::MigrationMixin
  prepend Twenty::Command::SQLiteMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    Twenty::Project.new(
      name: File.basename(Dir.getwd),
      path: Dir.getwd
    ).save!
  end
end
