# frozen_string_literal: true

Sequel.migration do
  up do
    create_table(:milestones) do
      primary_key :id
      String :name, null: false
      Date :due_date, null: true
      DateTime :created_at, null: false
      DateTime :updated_at, null: false
    end
  end

  down do
    drop_table :milestones
  end
end
