class Twenty::Servlet < WEBrick::HTTPServlet::AbstractServlet
  require_relative "servlet/connections"
  require_relative "servlet/issues"

  private
  def write(res, status, headers, body)
    res.status = status
    res.body = body
    headers.each { res[_1] = _2 }
  end
end
