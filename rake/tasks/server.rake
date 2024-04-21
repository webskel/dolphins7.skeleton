desc "Run server"
task :server, [:protocol] do |_, args|
  require 'rbconfig'
  cli = [RbConfig.ruby, "-rbundler/setup", "cli/bin/twenty", "up"]
  h   = args.to_h
  if h[:protocol] == "unix"
    Process.wait spawn(*cli, "--unix", "/tmp/twenty.freebsd.local")
  else
    Process.wait spawn(*cli)
  end
end
