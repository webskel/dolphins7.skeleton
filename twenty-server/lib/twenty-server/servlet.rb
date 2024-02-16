# frozen_string_literal: true

class Twenty::Servlet < WEBrick::HTTPServlet::AbstractServlet
  ##
  # servlets
  require_relative "servlet/graphql"

  ##
  # mixins
  require_relative "servlet/mixin/server_mixin"
  extend ServerMixin
end
