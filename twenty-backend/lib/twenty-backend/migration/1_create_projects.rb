# frozen_string_literal: true

class CreateProjects < ActiveRecord::Migration[7.1]
  def up
    create_table(:projects) do |t|
      t.string :name, null: false
      t.string :path, null: false
      t.timestamps
    end
    add_index :projects, [:name, :path], unique: true
  end

  def down
    drop_table(:projects)
  end
end
