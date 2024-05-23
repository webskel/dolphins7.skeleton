# frozen_string_literal: true

Sequel.migration do
  up do
    add_column :milestones, :project_id, Integer, null: false
  end

  down do
    drop_column :milestones, :project_id
  end
end
