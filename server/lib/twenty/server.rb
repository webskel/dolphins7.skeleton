# frozen_string_literal: true

module Twenty
  require "fileutils"
  require "sequel"
  require_relative "server/path"

  ##
  # @return [String]
  #  Returns the default path for the SQLite database
  def self.default_database
    @default_database ||= File.join(Path.datadir, "database.sqlite")
  end

  ##
  # Establishes a database connection
  #
  # @param [String] path
  #  The path to a SQLite database
  #
  # @return [void]
  def self.establish_connection(path:)
    @connection = Sequel.connect(
      adapter: "sqlite",
      database: path
    )
  end

  ##
  # @return [Sequel::Database::SQLite]
  #  Returns the connection to a database
  def self.connection
    establish_connection unless @connection
    @connection
  end

  FileUtils.touch(default_database)
  require_relative "server/graphql"
  require_relative "server/rack"
end
