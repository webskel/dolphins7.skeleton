# frozen_string_literal: true

class Twenty::Command::Console < Twenty::Command
  set_banner usage: "twenty console [OPTIONS]",
             description: "Start the twenty developer console"

  ##
  # Option(s)
  include Option::Database

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
    require "irb"
    TOPLEVEL_BINDING.irb
  end
end
