# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.5.3"
  gem.licenses = ["0BSD"]
  gem.files = [
    *Dir.glob(File.join(__dir__, "host", "lib", "*.rb")),
  ].select { File.file?(_1) }
  gem.summary = "Minimal project management that runs on your computer"
  gem.description = gem.summary
  gem.add_runtime_dependency "twenty-server", "0.5.3"
  gem.add_runtime_dependency "twenty-client", "0.5.3"
  gem.add_runtime_dependency "twenty-cli", "0.5.3"
end
