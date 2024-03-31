namespace :nanoc do
  require "bundler/setup"
  workdir = File.realpath File.join(__dir__, "..")

  desc "Clean the build/ directory"
  task :clean do
    Dir.chdir(workdir) do
      sh "rm -rf node_modules/.cache/"
      sh "rm -rf build"
    end
  end

  desc "Configure build environment"
  task :env do
    ENV['SASS_PATH'] = File.join(workdir, 'src', 'css', 'vendor', 'tail.css', 'src')
  end

  desc "Produce the build/ directory"
  task :build, [:buildenv] => %w[nanoc:env] do |t, args|
    Dir.chdir(workdir) do
      buildenv = args.buildenv || ENV["buildenv"] || "development"
      sasspath = ENV["SASS_PATH"]
      sh "rm -rf build/css/"
      Bundler.with_unbundled_env {
        sh "SASS_PATH=#{sasspath} buildenv=#{buildenv} bundle exec nanoc co"
      }
    end
  end

  desc "Produce the build/ directory on-demand"
  task watch: %w[nanoc:build] do
    Dir.chdir(workdir) do
      require "listen"
      path = File.join(Dir.getwd, "src")
      Listen.to(path) do
        Bundler.with_unbundled_env { sh "rake nanoc:build" }
      end.start
      sleep
    end
  rescue Interrupt
    warn "SIGINT: exit"
    exit
  end
end
