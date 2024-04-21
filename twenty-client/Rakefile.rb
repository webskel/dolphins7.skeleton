require "bundler/setup"
namespace :schema do
  desc "Generate src/js/types/schema.ts"
  task :regen do
    path = File.join "..", "twenty-server"
    Bundler.with_unbundled_env {
      Dir.chdir(path) { sh "bundle exec rake schema:regen" }
    }
    sh "npm exec graphql-codegen"
  end
end
