# frozen_string_literal: true

module Twenty
  require "fileutils"
  require "webrick"
  require "active_record"
  require_relative "twenty-server/path"
  require_relative "twenty-server/graphql"
  require_relative "twenty-server/servlet"
  require_relative "twenty-server/migration"
  require_relative "twenty-server/model"
  extend FileUtils
  extend Path

  ##
  # @return [String]
  #  Returns the location of the default SQLite database.
  def self.default_database
    @default_database ||= File.join(datadir, "database.sqlite")
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
    mkdir_p(datadir)
    mkdir_p(tmpdir)
    touch(default_database)
  rescue => ex
    warn "prepare_dir error: #{ex.message} (#{ex.class})"
  end
  private_class_method :prepare_dir
  prepare_dir
end
