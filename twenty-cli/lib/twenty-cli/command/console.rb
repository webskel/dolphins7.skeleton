# frozen_string_literal: true

class Twenty::Command::Console < Twenty::Command
  set_banner usage: "twenty console [OPTIONS]",
             description: "Start the twenty developer console"
  include CommonOptionMixin
  prepend Twenty::Command::MigrationMixin
  prepend Twenty::Command::SQLiteMixin
  prepend Twenty::Command::RescueMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    require "irb"
    TOPLEVEL_BINDING.irb
  end
end
