class Twenty::Servlet::Connections < Twenty::Servlet
  def do_GET(req, res)
    write res,
          [200, {'content-type' => 'application/json'}, body]
  end

  private

  def body
    JSON.dump database.connections.map { Ryo.table_of(_1,recursive: true) }
  end
end
