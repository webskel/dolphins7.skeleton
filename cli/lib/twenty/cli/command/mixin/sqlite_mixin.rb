# frozen_string_literal: true

module Twenty::Command::SQLiteMixin
  def run_command(options)
    path = options.database || Twenty.default_database
    Twenty.establish_connection(path:)
    require "twenty/server/migration"
    require "twenty/server/model"
    super(options)
  end
end
