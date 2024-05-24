# frozen_string_literal: true

module Twenty::Command::Option
  module Database
    def self.included(mod)
      mod.module_eval do
        set_option "-d PATH",
                   "--database PATH",
                   "The path to an alternate SQLite database",
                   as: String,
                   default: nil
      end
    end
  end
end
