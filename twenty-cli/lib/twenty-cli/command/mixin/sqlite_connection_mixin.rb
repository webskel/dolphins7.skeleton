module Twenty::Command::SQLiteConnectionMixin
  def run_command(options)
    path = options.database || Twenty::Model.database
    Twenty::Model.connect(path:)
    super(options)
  end
end
