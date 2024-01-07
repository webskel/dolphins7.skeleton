# frozen_string_literal: true

class Twenty::Model < ActiveRecord::Base
  require "fileutils"
  extend FileUtils

  ##
  # @return [String]
  #  Returns the default SQLite database path.
  def self.database
    @database ||= File.join(home, "twenty.sqlite")
  end

  ##
  # @return [String]
  #  Returns a path to the directory where twenty writes data.
  def self.home
    File.join(Dir.home, ".local", "share", "twenty")
  end

  ##
  # Establishes a database connection.
  #
  # @param [String] path
  #  The path to a SQLite3 database file.
  #
  # @return [void]
  def self.connect(path:)
    ActiveRecord::Base.establish_connection(
      adapter: "sqlite3",
      database: path,
      pool: 3
    )
    prepare_dir
    require_models
  end

  ##
  # Require models.
  # @return [void]
  # @api private
  def self.require_models
    require_relative "model/project"
    require_relative "model/task"
  end
  private_class_method :require_models

  ##
  # Prepares the parent directory of the database.
  # @return [void]
  # @api private
  def self.prepare_dir
    return if File.exist?(database)
    mkdir_p(home)
    touch(database)
  end
  private_class_method :prepare_dir

  connect(path: database)
end
