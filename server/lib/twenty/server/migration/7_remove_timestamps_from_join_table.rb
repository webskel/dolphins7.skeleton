# frozen_string_literal: true

Sequel.migration do
  up do
    drop_column :tasks_milestones, :created_at
    drop_column :tasks_milestones, :updated_at
  end

  down do
    add_column :milestones, :created_at, DateTime, null: false
    add_column :milestones, :created_at, DateTime, null: false
  end
end
