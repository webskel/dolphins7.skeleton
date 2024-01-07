# frozen_string_literal: true

module Twenty
  ##
  # @return [String]
  #  Returns the path to the directory where twenty stores data.
  def self.home
    File.join(Dir.home, ".local", "share", "twenty")
  end

  require "webrick"
  require "active_record"
  require_relative "twenty-backend/servlet"
  require_relative "twenty-backend/migration"
  require_relative "twenty-backend/model"
end
