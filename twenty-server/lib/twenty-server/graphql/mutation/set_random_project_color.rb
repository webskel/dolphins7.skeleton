# frozen_string_literal: true

module Twenty::GraphQL::Mutation
  class SetRandomProjectColor < ::GraphQL::Schema::Mutation
    argument :project_id, Int, required: true

    field :errors, [String], null: false
    field :project, 'Twenty::GraphQL::Type::Project', null: true

    def resolve(project_id:)
      project = Twenty::Project.with_pk!(project_id)
      project.update(color: project.random_color)
      {errors: [], project:}
    rescue => ex
      {errors: [ex.message]}
    end
  end
end
