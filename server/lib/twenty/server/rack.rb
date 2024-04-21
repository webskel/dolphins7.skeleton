# frozen_string_literal: true

module Twenty::Rack
  require "server"
  require_relative "rack/graphql"

  ##
  # @param [Hash] options
  #  A hash of server options.
  #
  # @return [Thread]
  def self.server(options = {})
    Server.dir(Twenty.build, options.to_h)
  end
end
