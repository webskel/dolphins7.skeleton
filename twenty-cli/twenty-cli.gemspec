# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty-cli"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.3.4"
  gem.licenses = ["0BSD"]
  gem.files = [
    *Dir.glob(File.join(__dir__, "lib", "*.rb")),
    *Dir.glob(File.join(__dir__, "lib", "twenty-cli", "**", "*.rb")),
    *Dir.glob(File.join(__dir__, "libexec", "**", "*")),
    *Dir.glob(File.join(__dir__, "bin", "*"))
  ].select { File.file?(_1) }
  gem.require_paths = ["lib"]
  gem.summary = "twenty: command-line interface"
  gem.description = gem.summary
  gem.executables = ["twenty", "20"]
  gem.add_runtime_dependency "cmd.rb", "~> 0.2"
  gem.add_development_dependency "test-unit", "~> 3.5.7"
  gem.add_development_dependency "yard", "~> 0.9"
  gem.add_development_dependency "redcarpet", "~> 3.5"
  gem.add_development_dependency "standard", "~> 1.13"
end
