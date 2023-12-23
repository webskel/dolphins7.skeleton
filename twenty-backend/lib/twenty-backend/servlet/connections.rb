class Twenty::Servlet::Connections < Twenty::Servlet
  ##
  # GET /servlet/connections
  def do_GET(req, res)
    case req.path_info
    when ""
      ok(res, connections: Twenty::Connection.all)
    else
      not_found(res)
    end
  end
end
