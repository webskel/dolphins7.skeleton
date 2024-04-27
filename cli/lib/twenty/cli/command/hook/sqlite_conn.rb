# frozen_string_literal: true

module Twenty::Command::Hook
  module SQLiteConn
    def run_command(options)
      path = options.database || Twenty.default_database
      Twenty.establish_connection(path:)
      super(options)
    end
  end
end
