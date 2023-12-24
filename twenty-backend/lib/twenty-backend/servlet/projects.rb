# frozen_string_literal: true

class Twenty::Servlet::Projects < Twenty::Servlet
  ##
  # GET /servlet/projects
  def do_GET(req, res)
    case req.path_info
    when ""
      ok(res, projects: Twenty::Project.all)
    else
      not_found(res)
    end
  end
end
