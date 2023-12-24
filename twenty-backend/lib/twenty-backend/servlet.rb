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

  def parse_body(req, only: [], except: [])
    body = JSON.parse(req.body)
    body = only.size > 0 ? body.slice(*only) : body
    body = except.size > 0 ? body.except(*except) : body
    body
  end
end
