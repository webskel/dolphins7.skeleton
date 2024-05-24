# frozen_string_literal: true

module Twenty::GraphQL
  module Type
    include ::GraphQL::Types
  end
  require_relative "task_status"
  require_relative "project"
  require_relative "task"
  require_relative "query"
  require_relative "mutation"
end
