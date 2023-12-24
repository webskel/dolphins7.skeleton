# frozen_string_literal: true

class AddUniqueIndexToConnections < ActiveRecord::Migration[7.1]
  def up
    add_index :connections, [:name, :path], unique: true
  end

  def down
    remove_index :connections, [:name, :path], unique: true
  end
end
