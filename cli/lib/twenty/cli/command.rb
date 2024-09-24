# frozen_string_literal: true

require "cmd"

class Twenty::Command < Cmd
  ##
  # Hooks
  require_relative "command/option"
  require_relative "command/hook"

  ##
  # Commands
  require_relative "command/up"
  require_relative "command/down"
  require_relative "command/migrate"
  require_relative "command/console"

  private

  def require_models!
    require "twenty/server/model/init"
  end
end
