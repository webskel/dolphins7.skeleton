require_relative "rakelib/builders"
load "twenty-frontend/tasks/nanoc.rake"

namespace :gem do
  task :gemspec, [:version] do |t, args|
    GemSpec.call(args[:version])
  end

  task :copy, [:version] => [:gemspec] do |t, args|
    Copy.call(args[:version])
  end

  task :build, [:version] => ["nanoc:clean", "nanoc:build", :copy] do |t, args|
    Build.call(args[:version])
  end

  task :deploy, [:version] => [:build] do |t, args|
    Deploy.call(args[:version])
  end
end

