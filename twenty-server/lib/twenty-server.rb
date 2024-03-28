# frozen_string_literal: true

module Twenty
  require "fileutils"
  require "sequel"
  require_relative "twenty-server/path"
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
    @connection = Sequel.connect(
      adapter: "sqlite",
      database: path
    )
  end

  def self.connection
    establish_connection unless @connection
    @connection
  end

  begin
    FileUtils.mkdir_p(datadir)
    FileUtils.mkdir_p(tmpdir)
    FileUtils.touch(default_database)
  rescue => ex
    warn "prepare_dir error: #{ex.message} (#{ex.class})"
  end
  require_relative "twenty-server/graphql"
  require_relative "twenty-server/rack"
end
