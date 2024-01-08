# frozen_string_literal: true

class Twenty::Model < ActiveRecord::Base
  require "fileutils"
  extend FileUtils

  require_relative "model/project"
  require_relative "model/task"
end
