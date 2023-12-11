class Twenty::Servlet < WEBrick::HTTPServlet::AbstractServlet
  include Twenty::DB
  require_relative "servlet/connections"

  private
  def write(res, ary)
    status, headers, body = 3.times.map { ary.shift }
    res.status = status
    res.body = body
    headers.each { res[_1] = _2 }
  end
end
