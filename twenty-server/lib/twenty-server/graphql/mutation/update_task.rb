module Twenty::GraphQL::Mutation
  class UpdateTask < GraphQL::Schema::Mutation
    field :errors, [String], null: false
    argument :task_id, Int
    argument :input, Twenty::GraphQL::Input::TaskInput

    def resolve(task_id:, input:)
      task = Twenty::Task.find_by(id: task_id)
      task.update!(input.to_h)
      {"errors" => []}
    rescue => ex
      {"errors" => [ex.message]}
    end
  end
end
