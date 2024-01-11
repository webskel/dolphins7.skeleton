require "bundler/setup"
require "fileutils"

namespace :schema do
  desc "Generate share/twenty-backend/schema.graphql"
  task :regen do
    require "twenty-backend"
    schema = File.join(__dir__, "share", "twenty-backend", "schema.graphql")
    FileUtils.mkdir_p File.dirname(schema)
    File.binwrite schema, Twenty::GraphQL::Schema.to_definition
  end
end
