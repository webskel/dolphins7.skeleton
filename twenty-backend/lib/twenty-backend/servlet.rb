class Twenty::Servlet < WEBrick::HTTPServlet::AbstractServlet
  require_relative "servlet/response"
  require_relative "servlet/connections"
  require_relative "servlet/issues"
end
