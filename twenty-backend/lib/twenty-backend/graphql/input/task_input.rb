module Twenty::GraphQL::Input
  class TaskInput < GraphQL::Schema::InputObject
    argument :title, String
    argument :content, String
    argument :project_id, Int
  end
end
