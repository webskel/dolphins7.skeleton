# frozen_string_literal: true

module Twenty::Servlet::ResponseMixin
  ##
  # Sets 200 response.
  # @param [WEBrick::HTTPResponse] res
  #  An instance of {WEBrick::HTTPResponse WEBrick::HTTPResponse}
  # @param [#to_json] body
  #  The response body.
  # @return [void]
  def ok(res, body = {})
    Response.new(res)
      .set_status(200)
      .set_body(body)
  end

  ##
  # Sets 400 response.
  # @param [WEBrick::HTTPResponse] res
  #  An instance of {WEBrick::HTTPResponse WEBrick::HTTPResponse}
  # @param [#to_json] body
  #  The response body.
  # @return [void]
  def bad_request(res, body = {})
    Response.new(res)
      .set_status(400)
      .set_body({errors: ["Bad request"]}.merge(body))
  end

  ##
  # Sets 404 response.
  # @param [WEBrick::HTTPResponse] res
  #  An instance of {WEBrick::HTTPResponse WEBrick::HTTPResponse}
  # @return [void]
  def not_found(res)
    Response.new(res)
      .set_status(404)
      .set_body({errors: ["The requested path was not found"]})
  end
end
