# frozen_string_literal: true

module Twenty::GraphQL::Type
  class TaskStatus < GraphQL::Schema::Enum
    value :backlog
    value :ready
    value :in_progress
    value :complete
  end
end
