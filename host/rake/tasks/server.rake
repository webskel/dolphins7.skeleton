# frozen_string_literal: true

cwd = File.realpath File.join(__dir__, "..", "..", "..", "client")
desc "Start web server"
task :server, [:protocol] do |_t, args|
  h = args.to_h
  p = h[:protocol] || "tcp"
  n = File.basename File.dirname(cwd)
  Process.setproctitle "rake server[#{p}] [#{n}]"
  if p == "unix"
    Twenty::Command::Up
      .new(["-u", "/tmp/www/twenty.al-ridwan.home.network"])
      .run
  else
    Twenty::Command::Up
      .new(["-b", "127.0.0.1", "-p", "2222"])
      .run
  end
end
