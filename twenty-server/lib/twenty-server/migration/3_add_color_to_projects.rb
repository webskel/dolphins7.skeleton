# frozen_string_literal: true

Sequel.migration do
  up do
    default = Twenty::ColorableMixin.random_color
    add_column :projects, :color, :string, null: false, default:
  end

  down do
    drop_column :projects, :color
  end
end
