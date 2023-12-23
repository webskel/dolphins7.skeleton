require "cmd"

class Twenty::Command < Cmd
  require_relative "command/up"
  require_relative "command/down"
  require_relative "command/connect"
  require_relative "command/disconnect"
  require_relative "command/migrate"
end
