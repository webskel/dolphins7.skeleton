# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.5.8"
  gem.licenses = ["0BSD"]
  gem.files = [
    *Dir.glob(File.join(__dir__, "host", "lib", "*.rb")),
  ].select { File.file?(_1) }
  gem.summary = "A standalone web application"
  gem.description = "#{gem.summary}. " \
                    "This gem depends on twenty-cli, twenty-client, and twenty-server."
  gem.add_runtime_dependency "twenty-server", "0.5.8"
  gem.add_runtime_dependency "twenty-client", "0.5.8"
  gem.add_runtime_dependency "twenty-cli", "0.5.8"
  gem.add_development_dependency "rake", "~> 13.2"
  gem.metadata = { "source_code_uri" => "https://github.com/0x1eef/twenty#readme" }
end
