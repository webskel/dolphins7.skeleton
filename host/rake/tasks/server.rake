# frozen_string_literal: true

cwd = File.realpath File.join(__dir__, "..", "..", "..", "client")
desc "Start web server"
task :server, [:protocol] do |_t, args|
  nanoc = Ryo.from_yaml(path: File.join(cwd, "nanoc.yaml"))
  h = args.to_h
  p = h[:protocol] || "tcp"
  n = File.basename File.dirname(cwd)
  Process.setproctitle "rake server[#{p}] [#{n}]"
  if p == "unix"
    Twenty::Command::Up
      .new(["-u", nanoc.server.unix.path])
      .run
  else
    Twenty::Command::Up
      .new(["-b", nanoc.server.tcp.host, "-p", nanoc.server.tcp.port])
      .run
  end
end
