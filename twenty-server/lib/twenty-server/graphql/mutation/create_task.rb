# frozen_string_literal: true

module Twenty::GraphQL::Mutation
  class CreateTask < GraphQL::Schema::Mutation
    field :errors, [String], null: false
    argument :input, Twenty::GraphQL::Input::TaskInput

    def resolve(input:)
      Twenty::Task.new(input.to_h).save!
      {"errors" => []}
    rescue => ex
      {"errors" => [ex.message]}
    end
  end
end
