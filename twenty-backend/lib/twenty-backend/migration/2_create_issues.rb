class CreateIssues < ActiveRecord::Migration[7.1]
  def up
    create_table(:issues) do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.string :state, null: false, default: "open"
      t.belongs_to :connection, null: false
      t.timestamps
    end
  end

  def down
    drop_table(:issues)
  end
end
