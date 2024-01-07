# frozen_string_literal: true

class Twenty::Model < ActiveRecord::Base
  require "fileutils"
  extend FileUtils

  ##
  # @return [String]
  #  Returns the default SQLite database path.
  def self.database
    @database ||= File.join(Twenty.home, "twenty.sqlite")
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
  end

  ##
  # Prepares the parent directory of the database.
  # @return [void]
  # @api private
  def self.prepare_dir
    return if File.exist?(database)
    mkdir_p(Twenty.home)
    touch(database)
  rescue => ex
    warn "[twenty] error in prepare_dir (#{ex.class}: #{ex.message})"
  end
  private_class_method :prepare_dir
  prepare_dir

  require_relative "model/project"
  require_relative "model/task"
end
