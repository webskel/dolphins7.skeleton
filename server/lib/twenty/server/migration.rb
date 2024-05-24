# frozen_string_literal: true

module Twenty::Migration
  Sequel.extension(:migration)

  ##
  # @return [String]
  #  Returns the path to the migrations directory
  def self.migrations_path
    File.join(__dir__, "migration")
  end

  ##
  # Run migrations
  # @return [void]
  def self.run!(options = {})
    Sequel::Migrator.run(Twenty.db, migrations_path, options)
  end

  ##
  # @return [Boolean]
  #  Returns true when there are pending migrations
  def self.pending_migrations?
    !Sequel::Migrator.is_current?(Twenty.db, migrations_path)
  end
end
