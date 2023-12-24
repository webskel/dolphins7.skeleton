module Twenty::Servlet::ResponseMixin
  ##
  # Sets a 200 OK response.
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
  # Sets a 400 Bad Request response.
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
  # Set a 404 Not Found response.
  # @param [WEBrick::HTTPResponse] res
  #  An instance of {WEBrick::HTTPResponse WEBrick::HTTPResponse}
  # @return [void]
  def not_found(res)
    Response.new(res)
      .set_status(404)
      .set_body({errors: ["The requested path was not found"]})
  end
end
