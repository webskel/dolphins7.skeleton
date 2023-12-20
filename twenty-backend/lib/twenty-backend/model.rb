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
  def self.connect
    ActiveRecord::Base.establish_connection(
      adapter: 'sqlite3',
      database:,
      pool: 3
    )
  end

  ##
  # Creates the {home home} directory.
  # @return [void]
  # @api private
  def self.prepare
    return if File.exist?(database)
    mkdir_p(home)
    touch(database)
  end

  prepare
  connect
  Twenty::Migration.run!
  require_relative "model/connection"
  require_relative "model/issue"
end
