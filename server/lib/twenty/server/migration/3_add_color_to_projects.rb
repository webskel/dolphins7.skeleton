# frozen_string_literal: true

Sequel.migration do
  column_exists = ->(table, column) do
    schema = Twenty.connection.schema(table)
    schema.find { |(key,_)| key == column }
  end

  up do
    next if column_exists.call(:projects, :color)
    default = Twenty::Mixin::Colorable.random_color
    add_column :projects, :color, :string, null: false, default:
  end

  down do
    drop_column :projects, :color
  end
end
