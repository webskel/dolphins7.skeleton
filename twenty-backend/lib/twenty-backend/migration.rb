module Twenty::Migration
  ##
  # @return [String]
  #  Returns the path to twenty's migrations.
  def self.migrations_path
    [File.join(__dir__, "migration")]
  end

  ##
  # Runs migrations (if neccessary).
  # @return [void]
  def self.run!
    context = ActiveRecord::MigrationContext.new(migrations_path)
    context.migrate
  end
  ActiveRecord.timestamped_migrations = false
end
