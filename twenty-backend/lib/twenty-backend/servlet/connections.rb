class Twenty::Servlet::Connections < Twenty::Servlet
  def do_GET(req, res)
    case req.path_info
    when ""
      # GET /
      Response.new(res)
        .set_status(200)
        .set_body(connections: Twenty::Connection.all)
    else
      Response.new(res).not_found
    end
  end
end
