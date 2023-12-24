# frozen_string_literal: true

class RenameConnectionsToProjects < ActiveRecord::Migration[7.1]
  def up
    rename_table :connections, :projects
    rename_column :tasks, :connection_id, :project_id
  end

  def down
    rename_table :projects, :connections
    rename_column :tasks, :project_id, :connection_id
  end
end
