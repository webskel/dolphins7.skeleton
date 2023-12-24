class ChangeStateToStatus < ActiveRecord::Migration[7.1]
  def up
    rename_column :tasks, :state, :status
    Twenty::Task.where(status: "open").update_all(status: '0')
    Twenty::Task.where(status: "closed").update_all(status: '2')
    change_column :tasks, :status,  :integer
  end

  def down
    raise ActiveRecord::IrrversibleMigration
  end
end
