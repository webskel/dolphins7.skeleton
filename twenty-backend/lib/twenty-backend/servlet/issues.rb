class Twenty::Servlet::Issues < Twenty::Servlet
  ##
  # GET /servlet/issues/
  # GET /servlet/issues/<id>/
  def do_GET(req, res)
    case req.path_info
    when ""
      issues = Twenty::Issue.open.order(updated_at: :desc)
      ok(res, issues:)
    when %r|^/([\d]+)/?$|
      issue = Twenty::Issue.find_by(id: $1)
      issue ? ok(res, issue:) : not_found(res)
    else
      not_found(res)
    end
  end

  ##
  # POST /servlet/issues/
  def do_POST(req, res)
    case req.path_info
    when ""
      issue = Twenty::Issue.new(JSON.parse(req.body))
      if issue.save
        ok(res, issue:)
      else
        errors = issue.errors.full_messages
        Response.new(res)
          .set_status(422)
          .set_body(errors:)
      end
    else
      not_found(res)
    end
  end

  ##
  # PUT /servlet/issues
  def do_PUT(req, res)
    case req.path_info
    when ""
      body = JSON.parse(req.body)
      id = body.delete("id")
      issue = Twenty::Issue.find_by(id:)
      issue.update(body) ? ok(res, issue:) : not_found(res)
    else
      not_found(res)
    end
  end

  ##
  # DELETE /servlet/issues/<id>/
  def do_DELETE(req, res)
    case req.path_info
    when %r|^/([\d]+)/?$|
      issue = Twenty::Issue.find_by(id: $1)
      issue.destroy ? ok(res) : not_found(res)
    else
      not_found(res)
    end
  end
end
