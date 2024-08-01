# frozen_string_literal: true

module Twenty::Rack
  require "server"
  require_relative "graphql"

  ##
  # @param [Hash, #to_h] options
  #  Hash of server options
  # @return [Thread]
  def self.server(options = {})
    Server.new Rack::Builder.app {
      use Server::ETag
      run Twenty::Rack::GraphQL
    }, Server.prepare(options)
  end
end
