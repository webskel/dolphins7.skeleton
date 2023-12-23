class RenameIssuesToTasks < ActiveRecord::Migration[7.1]
  def up
    rename_table :issues, :tasks
  end

  def down
    rename_table :tasks, :issues
  end
end
