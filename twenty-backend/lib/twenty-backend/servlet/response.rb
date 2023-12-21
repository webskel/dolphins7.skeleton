class Twenty::Servlet::Response
  ##
  # @param [WEBrick::HTTPResponse] res
  #  An instance of WEBrick::HTTPResponse.
  # @return [Twenty::Servlet::Response]
  #  Returns an instance of Twenty::Servlet::Response.
  def initialize(res)
    @res = res
    set_headers({"content-type" => "application/json"})
  end

  ##
  # Sets the response status.
  # @param [Integer] status
  #  A status code.
  # @return [Twenty::Servlet::Response]
  #  Returns self.
  def set_status(status)
    res.status = status
    self
  end

  ##
  # Sets the response body.
  # @param [#to_json] body
  #  The response body.
  # @return [Twenty::Servlet::Response]
  #  Returns self.
  def set_body(body)
    res.body = default_body_for(res.status).merge(body).to_json
    self
  end

  ##
  # Sets the response headers.
  # @param [#each] headers
  #  The response headers.
  # @return [Twenty::Servlet::Response]
  #  Returns self.
  def set_headers(headers)
    headers.each { res[_1] = _2 }
    self
  end

  private
  attr_reader :res
  def default_body_for(status)
    case status
    when 200
      {ok: true, errors: []}
    else
      {ok: false, errors: ["Internal server error"]}
    end
  end
end
