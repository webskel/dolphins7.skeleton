# frozen_string_literal: true

class AddUniqueIndexToProjects < ActiveRecord::Migration[7.1]
  def up
    add_index :projects, [:name, :path], unique: true
  end

  def down
    remove_index :projects, [:name, :path], unique: true
  end
end
