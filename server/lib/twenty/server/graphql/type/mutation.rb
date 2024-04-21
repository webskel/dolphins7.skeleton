# frozen_string_literal: true

module Twenty::GraphQL::Type
  class Mutation < GraphQL::Schema::Object
    field :destroy_task, mutation: Twenty::GraphQL::Mutation::DestroyTask
    field :complete_task, mutation: Twenty::GraphQL::Mutation::CompleteTask
    field :create_task, mutation: Twenty::GraphQL::Mutation::CreateTask
    field :update_task, mutation: Twenty::GraphQL::Mutation::UpdateTask
    field :set_random_project_color, mutation: Twenty::GraphQL::Mutation::SetRandomProjectColor
  end
end
