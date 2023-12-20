class Twenty::Servlet::Connections < Twenty::Servlet
  def do_GET(req, res)
    write res,
          [200, {'content-type' => 'application/json'}, body]
  end

  private

  def body
    JSON.dump(Twenty::Connection.all.to_a)
  end
end
