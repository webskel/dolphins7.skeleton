namespace :nanoc do
  cwd = File.realpath File.join(__dir__, "..")

  desc "Clean the build/ directory"
  task :clean do
    Dir.chdir(cwd) do
      sh "rm -rf build"
    end
  end

  desc "Produce the build/ directory"
  task :build do
    Dir.chdir(cwd) do
      # FIXME: discover why rm -rf build/css/ is needed.
      ENV["NODE_ENV"] = "production"
      sh "rm -rf build/css/"
      sh "bundle exec nanoc co"
    end
  end

  desc "Produce the build/ directory on-demand"
  task watch: ['nanoc:build'] do
    require "listen"
    path = File.join(Dir.getwd, "src")
    Listen.to(path) { sh "rake nanoc:build" }.start
    sleep
  rescue Interrupt
    warn "SIGINT: exit"
    exit
  end
end
