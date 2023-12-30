module Twenty::Command::PendingMigrationMixin
  def run_command(...)
    if pending_migrations?
      warn "There are pending migrations.\n" \
           "Run \"twenty migrate\" first.\n"
      exit(1)
    else
      super(...)
    end
  end
  private

  def pending_migrations?
    Twenty::Migration.pending_migrations?
  end
end
