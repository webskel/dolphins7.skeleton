# frozen_string_literal: true

Gem::Specification.new do |gem|
  gem.name = "twenty-frontend"
  gem.authors = ["0x1eef"]
  gem.email = ["0x1eef@protonmail.com"]
  gem.homepage = "https://github.com/0x1eef/twenty#readme"
  gem.version = "0.1.0"
  gem.licenses = ["0BSD"]
  gem.files = File.binread(File.join(__dir__, "MANIFEST"))
                  .each_line
                  .flat_map { Dir.glob(_1.chomp) }
  gem.require_paths = ["lib"]
  gem.summary = "twenty: frontend"
  gem.description = gem.summary
end
