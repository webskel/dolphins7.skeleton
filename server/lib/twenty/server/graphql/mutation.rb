# frozen_string_literal: true

module Twenty::GraphQL
  module Mutation
    require_relative "mutation/destroy_task"
    require_relative "mutation/complete_task"
    require_relative "mutation/create_task"
    require_relative "mutation/update_task"
    require_relative "mutation/set_random_project_color"
  end
end
