require "bundler/setup"
require "fileutils"

namespace :schema do
  desc "Generate share/twenty-server/schema.graphql"
  task :regen do
    require "twenty-server"
    schema = File.join(__dir__, "share", "twenty-server", "schema.graphql")
    FileUtils.mkdir_p File.dirname(schema)
    File.binwrite schema, Twenty::GraphQL::Schema.to_definition
  end
end
