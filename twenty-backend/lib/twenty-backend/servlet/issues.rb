class Twenty::Servlet::Issues < Twenty::Servlet
  def do_POST(req, res)
    Twenty::Issue.new(
      JSON.parse(req.body)
    ).save!
    write res,
          {"content-type" => "application/json"},
          {"ok": true, errors: []}.to_json
  rescue
    write res,
          {"content-type" => "application/json"},
          {"ok": false, errors: [$!.class]}.to_json
  end
end
