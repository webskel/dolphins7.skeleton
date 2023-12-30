# frozen_string_literal: true

class Twenty::Command::Console < Twenty::Command
  set_banner usage: "twenty console [OPTIONS]",
             description: "Start the twenty developer console"
  prepend Twenty::Command::PendingMigrationMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command
  end

  private

  def run_command
    require "irb"
    TOPLEVEL_BINDING.irb
  end
end
