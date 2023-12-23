class Twenty::Servlet < WEBrick::HTTPServlet::AbstractServlet
  require_relative "servlet/response"
  require_relative "servlet/projects"
  require_relative "servlet/tasks"

  def ok(res, body = {})
    Response.new(res)
      .set_status(200)
      .set_body(body)
  end

  def not_found(res)
    Response.new(res)
      .set_status(404)
      .set_body({errors: ["The requested path was not found"]})
  end

  def bad_request(res, body = {})
    Response.new(res)
      .set_status(400)
      .set_body({errors: ["Bad request"]}.merge(body))
  end
end
