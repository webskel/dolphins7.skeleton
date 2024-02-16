# frozen_string_literal: true

class CreateTasks < ActiveRecord::Migration[7.1]
  def up
    create_table(:tasks) do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.integer :status, null: false, default: 0
      t.belongs_to :project, null: false
      t.timestamps
    end
  end

  def down
    drop_table(:tasks)
  end
end
