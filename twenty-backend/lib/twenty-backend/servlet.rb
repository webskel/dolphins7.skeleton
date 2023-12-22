class Twenty::Servlet < WEBrick::HTTPServlet::AbstractServlet
  require_relative "servlet/response"
  require_relative "servlet/connections"
  require_relative "servlet/issues"

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
end
