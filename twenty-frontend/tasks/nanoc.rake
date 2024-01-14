namespace :nanoc do
  desc "Produce the build/ directory"
  task :build do
    # FIXME: discover why rm -rf build/css/ is needed.
    sh "rm -rf build/css/"
    sh "nanoc co"
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
