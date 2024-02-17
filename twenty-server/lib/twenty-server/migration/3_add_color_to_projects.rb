# frozen_string_literal: true

class AddColorToProjects < ActiveRecord::Migration[7.1]
  def up
    default = Twenty::ColorableMixin.random_color
    add_column :projects, :color, :string, null: false, default:
  end

  def down
    drop_column :projects, :color
  end
end
