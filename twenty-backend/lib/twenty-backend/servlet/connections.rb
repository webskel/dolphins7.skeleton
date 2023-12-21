class Twenty::Servlet::Connections < Twenty::Servlet
  def do_GET(req, res)
    write res, 200,
          {'content-type' => 'application/json'},
          JSON.dump(Twenty::Connection.all.to_a)
  end
end
