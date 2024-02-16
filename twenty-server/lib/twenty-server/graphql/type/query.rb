module Twenty::GraphQL::Type
  class Query < GraphQL::Schema::Object
    field :find_task, Task, null: true do
      argument :task_id, Int
    end
    field :tasks, [Task], null: false do
      argument :status, TaskStatus
      argument :project_id, Int, required: false
    end
    field :projects, [Project], null: false

    def find_task(task_id:)
      Twenty::Task.find_by(id: task_id)
    end

    def tasks(status:, project_id: nil)
      tasks = Twenty::Task
        .where(status:)
        .order(updated_at: :desc)
      project_id ? tasks.where(project_id:) : tasks
    end

    def projects
      Twenty::Project.all
    end
  end
end
