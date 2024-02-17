# frozen_string_literal: true

class Twenty::Command
  module CommonOptionMixin
    def self.included(mod)
      mod.module_eval do
        set_option "-d PATH",
                   "--database PATH",
                   "The path to an alternate SQLite3 database",
                   as: String,
                   default: nil
      end
    end
  end
end
