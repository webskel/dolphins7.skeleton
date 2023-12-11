module Twenty
  module DB
    require "json"
    DEFAULTS = { connections: [] }

    ##
    # FIXME:
    # The following methods are required by
    # both twenty-cli, and twenty-backend. Eventually
    # they should be moved into their own package.

    def home
      File.join Dir.home, ".local", "share", "twenty"
    end

    def database
      Ryo.from DEFAULTS.dup.merge(JSON.parse(File.binread(database_path)))
    rescue
      Ryo.from(DEFAULTS.dup)
    end

    def database_path
      File.join(home, "database.json")
    end

    def save!(db)
      File.binwrite database_path,
                    JSON.dump(Ryo.table_of(db, recursive: true))
    end
  end

  require "twenty-backend"
  require "twenty-frontend"
  require_relative "twenty-cli/command"
end
