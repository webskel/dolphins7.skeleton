# frozen_string_literal: true

module Twenty::Command::Hook
  module RequireMigration
    Error = Class.new(RuntimeError)

    def run_command(...)
      if pending_migrations?
        raise Error, "There are pending database migrations to run. \n" \
                     "Try 'twenty migrate'"
      else
        super(...)
      end
    end

    private

    def pending_migrations?
      Twenty::Migration.pending_migrations?
    end
  end
end
