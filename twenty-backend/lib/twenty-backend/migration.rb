module Twenty::Migration
  require_relative "migration/create_connections"
  require_relative "migration/create_issues"

  def self.run!
    CreateConnections.migrate(:up)
    CreateIssues.migrate(:up)
  rescue
    warn "#{$!.class}: #{$!.message}"
  end
end
