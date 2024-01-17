# frozen_string_literal: true

module Twenty
  require "fileutils"
  require "webrick"
  require "active_record"
  require_relative "twenty-backend/graphql"
  require_relative "twenty-backend/servlet"
  require_relative "twenty-backend/migration"
  require_relative "twenty-backend/model"

  ##
  # @return [String]
  #  Returns the directory where twenty stores data.
  def self.home
    File.join(Dir.home, ".local", "share", "20")
  end

  ##
  # @return [String]
  #  Returns the default SQLite database.
  def self.default_database
    @default_database ||= File.join(home, "database.sqlite")
  end

  ##
  # Establishes a database connection.
  #
  # @param [String] path
  #  The path to a SQLite3 database file.
  #
  # @return [void]
  def self.establish_connection(path:)
    ActiveRecord::Base.establish_connection(
      adapter: "sqlite3",
      database: path,
      pool: 16
    )
  end

  ##
  # Prepares the parent directory of the database.
  # @return [void]
  # @api private
  def self.prepare_dir
    return if File.exist?(default_database)
    FileUtils.mkdir_p(home)
    FileUtils.touch(default_database)
  rescue => ex
    warn "prepare_dir error: #{ex.message} (#{ex.class})"
  end
  private_class_method :prepare_dir
  prepare_dir
end
