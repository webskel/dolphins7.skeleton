module Twenty::Command::SQLiteConnectionMixin
  def run_command(options)
    path = options.database || Twenty.database_path
    Twenty.establish_connection(path:)
    super(options)
  end
end
