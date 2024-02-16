module Twenty::GraphQL::Mutation
  class CompleteTask < GraphQL::Schema::Mutation
    argument :task_id, Int
    field :ok, Boolean
    field :errors, [String]

    def resolve(task_id:)
      task = Twenty::Task.find(task_id)
      task.update!(status: :complete)
      {ok: true, errors: []}
    rescue => ex
      {ok: false, errors: [ex.message]}
    end
  end
end
