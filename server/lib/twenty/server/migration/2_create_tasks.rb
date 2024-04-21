# frozen_string_literal: true

Sequel.migration do
  up do
    create_table(:tasks) do |t|
      primary_key :id
      String :title, null: false
      Text :content, null: false
      Integer :status, null: false, default: 0
      DateTime :created_at
      DateTime :updated_at
      foreign_key :project_id, :projects, null: false
    end
  end

  down do
    drop_table(:tasks)
  end
end
