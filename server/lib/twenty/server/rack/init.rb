# frozen_string_literal: true

module Twenty::Rack
  require "server"
  require_relative "graphql"

  ##
  # @param [Hash, #to_h] options
  #  Hash of server options
  #
  # @return [Thread]
  def self.server(options = {})
    Server.dir(Twenty.build, options.to_h)
  end
end
