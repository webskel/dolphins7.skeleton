# frozen_string_literal: true

module Twenty::GraphQL::Type
  class Project < GraphQL::Schema::Object
    field :id, Int, null: false
    field :name, String, null: false
    field :path, String, null: false
    field :color, String, null: false
    field :tasks, "[Twenty::GraphQL::Type::Task]", null: false
    field :open_task_count, Integer, null: false
  end
end
