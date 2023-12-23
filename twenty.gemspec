# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.1.0"
  gem.licenses = ["0BSD"]
  gem.files = []
  gem.summary = "twenty helps you manage projects with a solution " \
                "that runs on your computer rather than in the " \
                "cloud."
  gem.description = gem.summary
  gem.add_runtime_dependency "twenty-backend", "~> 0.1"
  gem.add_runtime_dependency "twenty-frontend", "~> 0.1"
  gem.add_runtime_dependency "twenty-cli", "~> 0.1"
end
