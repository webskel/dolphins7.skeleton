# frozen_string_literal: true

require "cmd"

class Twenty::Command < Cmd
  ##
  # mixins
  require_relative "command/mixin/common_option_mixin"
  require_relative "command/mixin/pending_migration_mixin"
  require_relative "command/mixin/sqlite_connection_mixin"

  ##
  # commands
  require_relative "command/up"
  require_relative "command/down"
  require_relative "command/connect"
  require_relative "command/disconnect"
  require_relative "command/migrate"
  require_relative "command/console"
end
