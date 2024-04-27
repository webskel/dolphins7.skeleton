# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty-server"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.5.6"
  gem.licenses = ["0BSD"]
  gem.files = [
    *Dir.glob(File.join(__dir__, "lib", "*.rb")),
    *Dir.glob(File.join(__dir__, "lib", "twenty", "*.rb")),
    *Dir.glob(File.join(__dir__, "lib", "twenty", "server", "**", "*.rb")),
    *Dir.glob(File.join(__dir__, "share", "**", "*")),
  ].select { File.file?(_1) }
  gem.require_paths = ["lib"]
  gem.summary = "Provides the server component of twenty"
  gem.description = "#{gem.summary}. " \
                    "See https://rubygems.org/gems/twenty for context."
  gem.add_runtime_dependency "sequel", "~> 5.78"
  gem.add_runtime_dependency "sqlite3", "~> 1.6"
  gem.add_runtime_dependency "graphql", "~> 2.2"
  gem.add_runtime_dependency "server.rb", "~> 0.1"
  gem.add_development_dependency "test-unit", "~> 3.5.7"
  gem.add_development_dependency "standard", "~> 1.35"
end
