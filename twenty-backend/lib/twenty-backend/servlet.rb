# frozen_string_literal: true

class Twenty::Servlet < WEBrick::HTTPServlet::AbstractServlet
  require_relative "servlet/response"
  require_relative "servlet/projects"
  require_relative "servlet/tasks"

  # mixins
  require_relative "servlet/mixin/server_mixin"
  require_relative "servlet/mixin/response_mixin"
  extend ServerMixin
  include ResponseMixin
end
