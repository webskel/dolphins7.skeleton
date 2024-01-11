module Twenty::GraphQL::Input
  class TaskInput < GraphQL::Schema::InputObject
    require_relative "../type/task_status"
    argument :title, String, required: false
    argument :content, String, required: false
    argument :project_id, Int, required: false
    argument :status, Twenty::GraphQL::Type::TaskStatus, required: false
  end
end
