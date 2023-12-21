class Twenty::Servlet::Response
  attr_reader :res

  def initialize(res)
    @res = res
    set_headers({"content-type" => "application/json"})
  end

  def set_status(status)
    res.status = status
    self
  end

  def set_body(body)
    res.body = default_body_for(res.status).merge(body).to_json
    self
  end

  def set_headers(headers)
    headers.each { res[_1] = _2 }
    self
  end

  private

  def default_body_for(status)
    case status
    when 200
      {ok: true, errors: []}
    else
      {ok: false, errors: ["Internal server error"]}
    end
  end
end
