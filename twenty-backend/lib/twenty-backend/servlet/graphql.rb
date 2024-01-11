class Twenty::Servlet::GraphQL < Twenty::Servlet
  ##
  # POST /servlet/graphql/
  def do_POST(req, res)
    params = JSON.parse(req.body)
    result = Twenty::GraphQL::Schema.execute(
      params['query'],
      variables: params['variables'],
      context: {}
    )
    res['content_type'] = 'application/json'
    res.status = 200
    res.body = result.to_json
  end
end
