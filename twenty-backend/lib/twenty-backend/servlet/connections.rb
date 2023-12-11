class Twenty::Servlet::Connections < Twenty::Servlet
  def do_GET(req, res)
    res_body = JSON.dump database.connections.map { Ryo.table_of(_1,recursive: true) }
    write res,
          [200, {'content-type' => 'application/json'}, res_body]
  end
end
