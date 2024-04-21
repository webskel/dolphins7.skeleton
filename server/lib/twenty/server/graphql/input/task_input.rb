# frozen_string_literal: true

module Twenty::GraphQL::Input
  class TaskInput < GraphQL::Schema::InputObject
    argument :title, String, required: false
    argument :content, String, required: false
    argument :project_id, Int, required: false
    argument :status, "Twenty::GraphQL::Type::TaskStatus", required: false
  end
end
