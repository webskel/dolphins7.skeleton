# frozen_string_literal: true

class Twenty::Command::Migrate < Twenty::Command
  set_banner usage: "twenty migrate [OPTIONS]",
             description: "Migrate the database"
  include CommonOptionMixin
  prepend Twenty::Command::SQLiteMixin
  prepend Twenty::Command::RescueMixin

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    Twenty::Migration.run!
  end
end
