module Twenty::Command::SQLiteMixin
  def run_command(options)
    path = options.database || Twenty.default_database
    Twenty.establish_connection(path:)
    super(options)
  end
end
