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
      issue = Twenty::Issue.find_by(id: $1)
      if issue
        Response.new(res)
          .set_status(200)
          .set_body(issue:)
      else
        Response.new(res).not_found
      end
    else
      Response.new(res).not_found
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
        errors = issue.errors.full_messages
        Response.new(res)
          .set_status(422)
          .set_body(errors:)
      end
    else
      Response.new(res).not_found
    end
  end
end
