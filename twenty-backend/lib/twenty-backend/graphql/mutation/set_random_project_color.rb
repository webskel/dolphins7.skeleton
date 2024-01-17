module Twenty::GraphQL::Mutation
  class SetRandomProjectColor < ::GraphQL::Schema::Mutation
    require_relative "../type/project"
    argument :project_id, Int, required: true
    field :ok, Boolean, null: false
    field :errors, [String], null: false
    field :project, Twenty::GraphQL::Type::Project, null: true

    def resolve(project_id:)
      project = Twenty::Project.find_by(id: project_id)
      project.color = project.send(:random_color)
      project.save!
      {ok: true, errors: [], project:}
    rescue => ex
      {ok: false, errors: [ex.message]}
    end
  end
end
