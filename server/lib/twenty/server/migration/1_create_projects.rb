# frozen_string_literal: true

Sequel.migration do
  up do
    create_table(:projects) do
      primary_key :id
      String :name, null: false
      String :path, null: false
      DateTime :created_at
      DateTime :updated_at
    end
    add_index :projects, [:name, :path], unique: true
  end

  down do
    drop_table(:projects)
  end
end
