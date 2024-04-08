# frozen_string_literal: true

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
      Twenty::Task.with_pk!(task_id)
    end

    def tasks(status:, project_id: nil)
      tasks = Twenty::Task
                .by_status(status)
                .order("updated_at DESC")
      (project_id ? tasks.where(project_id:) : tasks).all
    end

    def projects
      Twenty::Project.all
    end
  end
end
