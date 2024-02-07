# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty.rb"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.1.0"
  gem.licenses = ["0BSD"]
  gem.files = [
    *Dir.glob(File.join(__dir__, "lib", "*.rb")), 
    *Dir.glob(File.join(__dir__, "lib", "**", "*.rb"))
  ]
  gem.summary = "Minimal project management that runs on your computer"
  gem.description = gem.summary
  gem.add_runtime_dependency "twenty-backend", "~> 0.1"
  gem.add_runtime_dependency "twenty-frontend", "~> 0.1"
  gem.add_runtime_dependency "twenty-cli", "~> 0.1"
end
