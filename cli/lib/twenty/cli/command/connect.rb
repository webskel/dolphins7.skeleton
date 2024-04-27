# frozen_string_literal: true

class Twenty::Command::Connect < Twenty::Command
  set_banner usage: "twenty connect [OPTIONS]",
             description: "Connect a project to twenty"
  set_option "-p PATH", "--path PATH", "The path to a project", default: nil

  ##
  # Hooks
  # Run order:
  # Rescue -> SQLiteConn -> RequireMigration -> command
  prepend Hook::RequireMigration
  prepend Hook::SQLiteConn
  prepend Hook::Rescue

  def run
    options = parse_options(argv)
    run_command(options)
  end

  private

  def run_command(options)
    require "twenty/server/model"
    path = File.realpath(options.path ? options.path : Dir.getwd)
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
