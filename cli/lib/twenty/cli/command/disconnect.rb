# frozen_string_literal: true

class Twenty::Command::Disconnect < Twenty::Command
  set_banner usage: "twenty disconnect [OPTIONS]",
             description: "Disconnect a project from twenty"
  set_option "-p PATH", "--path PATH", "The path to a project", default: nil

  ##
  # Hooks
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
    Twenty::Project
      .where(path:)
      .first!
      .destroy
    warn "[-] '#{File.basename(path)}' disconnected"
  end
end
