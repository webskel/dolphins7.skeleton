class Twenty::Servlet::Issues < Twenty::Servlet
  def do_GET(req, res)
    case req.path_info
    when ""
      # GET /servlet/issues/
      Response.new(res)
        .set_status(200)
        .set_body(issues: Twenty::Issue.open)
    when %r|^/([\d]+)/?$|
      # GET /servlet/issues/<issue-id>/
      Response.new(res)
        .set_status(200)
        .set_body(issue: Twenty::Issue.find($1))
    else
      Response.new(res)
        .set_status(404)
        .set_body(errors: ["Bad path"])
    end
  end

  def do_POST(req, res)
    case req.path_info
    when ""
      # POST /servlet/issues/
      issue = Twenty::Issue.new(JSON.parse(req.body))
      if issue.save
        Response.new(res)
          .set_status(200)
          .set_body(issue:)
      else
        errors =  issue.errors.full_messages
        Response.new(res)
          .set_status(422)
          .set_body(errors:)
      end
    else
      Response.new(res)
        .set_status(404)
        .set_body(errors: ["Bad path"])
    end
  end
end
