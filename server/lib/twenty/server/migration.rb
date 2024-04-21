# frozen_string_literal: true

module Twenty::Migration
  require "sequel/extensions/migration"
  ##
  # @return [String]
  #  Returns the path to twenty's migrations.
  def self.migrations_path
    File.join(__dir__, "migration")
  end

  ##
  # Runs migrations (if neccessary).
  # @return [void]
  def self.run!
    Sequel::Migrator.run(Twenty.connection, migrations_path)
  end

  ##
  # @return [Boolean]
  #  Returns true when there are pending migrations.
  def self.pending_migrations?
    Sequel::Migrator.is_current?(Twenty.connection, migrations_path)
  end
end
