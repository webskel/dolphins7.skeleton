class Twenty::Servlet::Issues < Twenty::Servlet
  def do_POST(req, res)
    issue = Twenty::Issue.new(
      JSON.parse(req.body)
    ).tap(&:save!)
    write res, 200,
          {"content-type" => "application/json"},
          {"ok": true, errors: [], issue:}.to_json
  rescue
    write res, 422,
          {"content-type" => "application/json"},
          {"ok": false, errors: ["#{$!.class}: #{$!.message}"]}.to_json
  end
end
