# frozen_string_literal: true

class Twenty::Model < ActiveRecord::Base
  require_relative "model/project"
  require_relative "model/task"
end
