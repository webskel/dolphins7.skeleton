# frozen_string_literal: true

module Twenty::GraphQL
  module Type
    include ::GraphQL::Types
  end
  require_relative "type/task_status"
  require_relative "type/project"
  require_relative "type/task"
  require_relative "type/query"
  require_relative "type/mutation"
end
