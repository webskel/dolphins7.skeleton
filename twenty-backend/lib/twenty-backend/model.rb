class Twenty::Model < ActiveRecord::Base
  require "fileutils"
  extend FileUtils

  ##
  # @return [String]
  #  Returns the path to a SQLite database.
  def self.database
    File.join(home, "twenty.sqlite")
  end

  ##
  # @return [String]
  #  Returns a path to the directory where twenty writes data.
  def self.home
    File.join(Dir.home, ".local", "share", "twenty")
  end

  ##
  # Establishes a database connection.
  # @return [void]
  # @api private
  def self.connect_database
    ActiveRecord::Base.establish_connection(
      adapter: 'sqlite3',
      database:,
      pool: 3
    )
  end

  ##
  # Prepares the database environment.
  # @return [void]
  # @api private
  def self.prepare_database
    return if File.exist?(database)
    mkdir_p(home)
    touch(database)
  end

  prepare_database
  connect_database
  require_relative "model/project"
  require_relative "model/task"
end
