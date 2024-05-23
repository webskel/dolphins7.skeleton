# frozen_string_literal: true

Sequel.migration do
  up do
    create_table(:tasks_milestones) do
      primary_key :id
      Integer :task_id, null: false
      Integer :milestone_id, null: false
      DateTime :created_at, null: false
      DateTime :updated_at, null: false
    end
  end

  down do
    drop_table :tasks_milestones
  end
end
