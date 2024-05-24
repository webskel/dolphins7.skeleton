# frozen_string_literal: true

module Twenty::Command::Hook
  module SQLiteConn
    def run_command(options)
      connect!(options)
      super(options)
    end

    private

    def connect!(options)
      Twenty.connect(
        database: options.database || Twenty.default_database
      )
    end
  end
end
