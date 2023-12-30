# frozen_string_literal: true

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
    context.migrate
  end
  ActiveRecord.timestamped_migrations = false

  ##
  # @return [Boolean]
  #  Returns true when there are pending migrations.
  def self.pending_migrations?
    context.open.pending_migrations.any?
  end

  ##
  # @return [ActiveRecord::MigrationContext]
  #  Returns an instance of
  #  {ActiveRecord::MigrationContext ActiveRecord::MigrationContext}.
  def self.context
    @context ||= ActiveRecord::MigrationContext.new(migrations_path)
  end
  private_class_method :context
end
