# frozen_string_literal: true

module Twenty
  extend Module.new {
    require "tmpdir"
    require "fileutils"
    extend self
    extend FileUtils

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
  # @param [Hash] options
  #  'Sequel.connect' options
  #
  # @return [void]
  def self.connect(options = {})
    @db = Sequel.connect({adapter: "sqlite"}.merge(options))
  end

  ##
  # @return [Sequel::Database::SQLite]
  #  Returns a database object
  def self.db
    connect unless @db
    @db
  end

  require "sequel"
  require_relative "server/migration/init"
  require_relative "server/graphql/init"
  require_relative "server/rack/init"
end
