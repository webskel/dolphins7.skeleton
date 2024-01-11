module Twenty::GraphQL::Type
  class Query < GraphQL::Schema::Object
    field :find_task, Task, null: true do
      argument :task_id, Int
    end
    field :tasks, [Task], null: false do
      argument :status, TaskStatus
    end
    field :projects, [Project], null: false

    def find_task(task_id:)
      Twenty::Task.find_by(id: task_id)
    end

    def tasks(status:)
      Twenty::Task
        .where(status:)
        .order(updated_at: :desc)
    end

    def projects
      Twenty::Project.all
    end
  end
end
