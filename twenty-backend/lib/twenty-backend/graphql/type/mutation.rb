module Twenty::GraphQL::Type
  class Mutation < GraphQL::Schema::Object
    require_relative "../mutation/destroy_task"
    require_relative "../mutation/complete_task"
    require_relative "../mutation/create_task"
    require_relative "../mutation/update_task"
    field :destroy_task, mutation: Twenty::GraphQL::Mutation::DestroyTask
    field :complete_task, mutation: Twenty::GraphQL::Mutation::CompleteTask
    field :create_task, mutation: Twenty::GraphQL::Mutation::CreateTask
    field :update_task, mutation: Twenty::GraphQL::Mutation::UpdateTask
  end
end
