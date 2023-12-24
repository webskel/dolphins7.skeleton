class ChangeStatusDefault < ActiveRecord::Migration[7.1]
  def up
    change_column :tasks, :status, :integer, default: 0
  end

  def down
    raise ActiveRecord::IrrversibleMigration
  end
end
