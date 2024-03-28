# frozen_string_literal: true

module Twenty
  require "fileutils"
  require "sequel"
  require_relative "twenty-server/path"

  ##
  # @return [String]
  #  Returns the location of the default SQLite database.
  def self.default_database
    @default_database ||= File.join(Path.datadir, "database.sqlite")
  end

  ##
  # Establishes a database connection.
  #
  # @param [String] path
  #  The path to a SQLite3 database file.
  #
  # @return [void]
  def self.establish_connection(path:)
    @connection = Sequel.connect(
      adapter: "sqlite",
      database: path
    )
  end

  def self.connection
    establish_connection unless @connection
    @connection
  end

  FileUtils.touch(default_database)
  require_relative "twenty-server/graphql"
  require_relative "twenty-server/rack"
end
