class CreateConnections < ActiveRecord::Migration[7.1]
  def up
    create_table(:connections) do |t|
      t.string :name, null: false
      t.string :path, null: false
      t.timestamps
    end
  end

  def down
    drop_table(:connections)
  end
end
