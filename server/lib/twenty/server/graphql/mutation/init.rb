# frozen_string_literal: true

module Twenty::GraphQL
  module Mutation
    require_relative "destroy_task"
    require_relative "complete_task"
    require_relative "create_task"
    require_relative "update_task"
    require_relative "set_random_project_color"
  end
end
