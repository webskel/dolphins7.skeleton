#!/usr/bin/env ruby

namespace :rubocop do
  root = File.realpath File.join(__dir__, "..", "..")
  gems = [
    File.join(root, "twenty-cli"),
    File.join(root, "twenty-server"),
    File.join(root, "twenty-client")
  ]

  desc "Copy '.rubocop.yml' into place"
  task :copy do
    gems.each do
      dest = File.join(_1, ".rubocop.yml")
      cp File.join(root, ".rubocop.yml"), dest
      warn = "##\n" \
             "# DON'T EDIT THIS FILE DIRECTLY.\n" \
             "# Edit '.rubocop.yml' at the root of the project instead.\n" \
             "##\n\n"
      File.write dest, [warn, *File.read(dest).each_line].join
    end
  end

  desc "Apply rubocop rules"
  task :apply do
    gems.each do
      Dir.chdir(_1) do
        Bundler.with_unbundled_env { sh "bundle exec rubocop -A" }
      end
    end
  end
end
