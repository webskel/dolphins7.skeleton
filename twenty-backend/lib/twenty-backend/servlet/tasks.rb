# frozen_string_literal: true

class Twenty::Servlet::Tasks < Twenty::Servlet
  ##
  # GET /servlet/tasks/
  # GET /servlet/tasks/<id>/
  def do_GET(req, res)
    case req.path_info
    when ""
      tasks = Twenty::Task.ready.order(updated_at: :desc)
      ok(res, tasks:)
    when %r{\A/([\d]+)/?\z}
      task = Twenty::Task.find_by(id: $1)
      task ? ok(res, task:) : not_found(res)
    else
      not_found(res)
    end
  end

  ##
  # POST /servlet/tasks/
  def do_POST(req, res)
    case req.path_info
    when ""
      body = parse_body(req.body, only: ["title", "content", "project_id"])
      task = Twenty::Task.new(body)
      if task.save
        ok(res, task:)
      else
        errors = task.errors.full_messages
        bad_request(res, errors:)
      end
    else
      not_found(res)
    end
  end

  ##
  # PUT /servlet/tasks
  def do_PUT(req, res)
    case req.path_info
    when ""
      body = parse_body(req, except: ["id"])
      id = parse_body(req, only: ["id"]).fetch("id", nil)
      task = Twenty::Task.find_by(id:)
      task&.update(body) ? ok(res, task:) : not_found(res)
    else
      not_found(res)
    end
  end

  ##
  # DELETE /servlet/tasks/<id>/
  def do_DELETE(req, res)
    case req.path_info
    when %r{\A/([\d]+)/?\z}
      task = Twenty::Task.find_by(id: $1)
      task.destroy ? ok(res) : not_found(res)
    else
      not_found(res)
    end
  end
end
