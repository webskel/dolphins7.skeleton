class Twenty::Servlet::Connections < Twenty::Servlet
  def do_GET(req, res)
    case req.path_info
    when ""
      # GET /
      Response.new(res)
        .set_status(200)
        .set_body(connections: Twenty::Connection.all)
    else
      Response.new(res)
        .set_status(404)
        .set_body(errors: ["Bad path"])
    end
  end
end
