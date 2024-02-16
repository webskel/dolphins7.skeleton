module Twenty::GraphQL::Mutation
  class SetRandomProjectColor < ::GraphQL::Schema::Mutation
    require_relative "../type/project"
    argument :project_id, Int, required: true

    field :errors, [String], null: false
    field :project, Twenty::GraphQL::Type::Project, null: true

    def resolve(project_id:)
      project = Twenty::Project.find(project_id)
      project.update!(color: project.random_color)
      {errors: [], project:}
    rescue => ex
      {errors: [ex.message]}
    end
  end
end
