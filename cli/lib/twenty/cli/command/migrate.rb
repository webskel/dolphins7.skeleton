# frozen_string_literal: true

class Twenty::Command::Migrate < Twenty::Command
  set_banner usage: "twenty migrate [OPTIONS]",
             description: "Migrate the database"
  set_option "-t TARGET", "--target TARGET", "The target version", default: nil

  include CommonOptionMixin
  prepend Twenty::Command::SQLiteMixin
  prepend Twenty::Command::RescueMixin

  def run
    options = parse_options(argv)
    run_command(options)
  end

  private

  def run_command(options)
    Twenty::Migration.run!(target: options.target)
  end
end
