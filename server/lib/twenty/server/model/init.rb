# frozen_string_literal: true

module Twenty::Model
  def self.included(model)
    model.plugin(:validation_class_methods)
    model.plugin(:timestamps, update_on_create: true)
  end

  require_relative "mixin/colorable"
  require_relative "project"
  require_relative "task"
  require_relative "milestone"
end
