# frozen_string_literal: true

module Twenty::GraphQL::Mutation
  class UpdateTask < GraphQL::Schema::Mutation
    field :errors, [String], null: false
    argument :task_id, Int
    argument :input, Twenty::GraphQL::Input::TaskInput

    def resolve(task_id:, input:)
      Twenty::Task
        .with_pk!(task_id)
        .update!(input.to_h)
      {"errors" => []}
    rescue => ex
      {"errors" => [ex.message]}
    end
  end
end
