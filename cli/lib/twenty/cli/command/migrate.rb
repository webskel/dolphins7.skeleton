# frozen_string_literal: true

class Twenty::Command::Migrate < Twenty::Command
  set_banner usage: "twenty migrate [OPTIONS]",
             description: "Migrate the database"
  set_option "-t TARGET", "--target TARGET", "The target version", default: nil

  ##
  # Options
  include Option::Database

  ##
  # Hooks
  # Run order:
  # Rescue -> SQLiteConn -> command.
  prepend Hook::SQLiteConn
  prepend Hook::Rescue

  def run
    options = parse_options(argv)
    run_command(options)
  end

  private

  def run_command(options)
    run_options = options.to_h.transform_keys(&:to_sym)
    Twenty::Migration.run!(run_options)
  end
end
