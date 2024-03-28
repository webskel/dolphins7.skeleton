# frozen_string_literal: true

module Twenty::Model
  def self.included(model)
    model.plugin(:validation_class_methods)
    model.plugin(:timestamps, update_on_create: true)
  end

  require_relative "model/mixin/colorable_mixin"
  require_relative "model/project"
  require_relative "model/task"
end
