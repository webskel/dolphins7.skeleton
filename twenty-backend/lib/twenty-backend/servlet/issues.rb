class Twenty::Servlet::Issues < Twenty::Servlet
  ##
  # GET /servlet/issues/
  # GET /servlet/issues/<id>/
  def do_GET(req, res)
    case req.path_info
    when ""
      issues = Twenty::Issue.open.order(updated_at: :desc)
      Response.new(res)
        .set_status(200)
        .set_body(issues:)
    when %r|^/([\d]+)/?$|
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

  ##
  # POST /servlet/issues/
  def do_POST(req, res)
    case req.path_info
    when ""
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

  ##
  # PUT /servlet/issues
  def do_PUT(req, res)
    case req.path_info
    when ""
      body = JSON.parse(req.body)
      id = body.delete("id")
      issue = Twenty::Issue.find_by(id:)
      if issue.update(body)
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

  ##
  # DELETE /servlet/issues/<id>/
  def do_DELETE(req, res)
    case req.path_info
    when %r|^/([\d]+)/?$|
      issue = Twenty::Issue.find_by(id: $1)
      if issue.destroy
        Response.new(res)
          .set_status(200)
          .set_body({ok: true})
      else
        Response.new(res).not_found
      end
    else
      Response.new(res).not_found
    end
  end
end
