module Twenty::GraphQL::Type
  class Project < GraphQL::Schema::Object
    require_relative "task"
    field :id, ID, null: false
    field :name, String, null: false
    field :path, String, null: false
    field :color, String, null: false
    field :tasks, [Task], null: false
  end
end
