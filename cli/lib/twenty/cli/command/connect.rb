# frozen_string_literal: true

class Twenty::Command::Connect < Twenty::Command
  set_banner usage: "twenty connect [OPTIONS]",
             description: "Connect a project to twenty"
  set_option "-p PATH", "--path PATH", "The path to a project", default: nil

  prepend Twenty::Command::MigrationMixin
  prepend Twenty::Command::SQLiteMixin
  prepend Twenty::Command::RescueMixin

  def run
    options = parse_options(argv)
    run_command(options)
  end

  private

  def run_command(options)
    path = options.path ? File.expand_path(options.path) : Dir.getwd
    if File.exist?(path)
      project = Twenty::Project.create(
        name: File.basename(path),
        path:
      )
      warn "[-] '#{project.name}' connected"
    else
      abort "[x] The path (#{path}) does not exist"
    end
  end
end
