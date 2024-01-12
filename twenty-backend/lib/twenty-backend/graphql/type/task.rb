module Twenty::GraphQL::Type
  class Task < GraphQL::Schema::Object
    require_relative "project"
    field :id, Int, null: false
    field :title, String, null: false
    field :status, TaskStatus, null: false
    field :content, String, null: false
    field :project, Project, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :is_ready, Boolean, null: false, method: :ready?
    field :is_backlogged, Boolean, null: false, method: :backlog?
    field :is_complete, Boolean, null: false, method: :complete?
    field :in_progress, Boolean, null: false, method: :in_progress?
  end
end
