# frozen_string_literal: true

class Twenty::Command::Up < Twenty::Command
  set_banner usage: "twenty up [OPTIONS]",
             description: "Start the twenty web server"
  set_option "-b ADDR",
             "--bind ADDR",
             "An address to bind to (default: 127.0.0.1)",
             default: "127.0.0.1"
  set_option "-p PORT",
             "--port PORT",
             "A port to listen on (default: 2020)",
             default: 2020,
             as: Integer
  set_option "-u PATH",
             "--unix PATH",
             "Listen on a UNIX socket"

  include CommonOptionMixin
  prepend Twenty::Command::MigrationMixin
  prepend Twenty::Command::SQLiteMixin
  prepend Twenty::Command::RescueMixin

  def run
    options = parse_options(argv)
    run_command(options)
  end

  private

  def run_command(options)
    File.binwrite(pid, Process.pid.to_s)
    thr = Twenty::Rack.server(options).start
    thr.join
  rescue Interrupt
    thr.kill
  ensure
    FileUtils.rm(pid)
  end

  def pid
    Twenty.pid
  end
end
