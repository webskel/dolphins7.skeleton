# frozen_string_literal: true

module Twenty::GraphQL::Mutation
  class DestroyTask < GraphQL::Schema::Mutation
    argument :task_id, Int
    field :ok, Boolean
    field :errors, [String]

    def resolve(task_id:)
      task = Twenty::Task.find(task_id)
      task.destroy!
      {ok: true, errors: []}
    rescue => ex
      {ok: false, errors: [ex.message]}
    end
  end
end
