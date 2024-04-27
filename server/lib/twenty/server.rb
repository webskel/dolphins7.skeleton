# frozen_string_literal: true

module Twenty
  require "fileutils"
  require "sequel"

  extend Module.new {
    extend self
    extend FileUtils
    require "tmpdir"

    ##
    # @return [String]
    #  Returns the path for the default SQLite database
    def default_database
      @default_database ||= File.join(datadir, "database.sqlite")
    end

    ##
    # @return [String]
    #  Returns the directory where twenty stores data
    def datadir
      File.join(Dir.home, ".local", "share", "twenty")
    end

    ##
    # @return [String]
    #  Returns the directory where twenty stores temporary data
    def tmpdir
      File.join(Dir.tmpdir, "twenty")
    end

    ##
    # @return [String]
    #  Returns the path to a PID file
    def pid
      File.join(tmpdir, "server.pid")
    end

    mkdir_p(datadir)
    mkdir_p(tmpdir)
  }

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

  require_relative "server/graphql"
  require_relative "server/rack"
end
