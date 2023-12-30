module Twenty::Command::PendingMigrationMixin
  def run_command(...)
    if Twenty::Migration.pending_migrations?
      warn "There are pending migrations.\n" \
           "Run \"twenty migrate\" first.\n"
      exit(1)
    else
      super(...)
    end
  end
end
