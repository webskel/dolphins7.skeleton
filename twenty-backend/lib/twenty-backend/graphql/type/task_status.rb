module Twenty::GraphQL::Type
  class TaskStatus < GraphQL::Schema::Enum
    value :ready
    value :in_progress
    value :complete
  end
end
