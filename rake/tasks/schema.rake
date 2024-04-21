namespace :schema do
  workdir = File.join(__dir__, "..", "..")
  desc "Regenerate the GraphQL schema (server-side and client-side)"
  task regen: %i[regen:server regen:client]

  task :'regen:server' do
    Dir.chdir(workdir) do
      require "twenty-server"
      schema = File.join(Dir.getwd, "share", "twenty-server", "schema.graphql")
      mkdir_p File.dirname(schema)
      File.binwrite schema, Twenty::GraphQL::Schema.to_definition
    end
  end

  task :'regen:client' do
    Dir.chdir(File.join(workdir, "twenty-client")) do
      sh "npm exec graphql-codegen"
    end
  end
end
