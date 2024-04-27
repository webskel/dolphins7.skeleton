# frozen_string_literal: true

class Twenty::Command::Down < Twenty::Command
  set_banner usage: "twenty down [OPTIONS]",
             description: "Stop the twenty web server"

  prepend Twenty::Command::SQLiteMixin
  prepend Twenty::Command::RescueMixin

  def run
    options = parse_options(argv)
    run_command(options)
  end

  private

  def run_command(options)
    if File.readable?(pid)
      pid = Integer(File.binread(pid).gsub(/[^\d]/, ""))
      Process.kill("SIGINT", pid)
    else
      warn "[x] #{pid} is not readable"
    end
  rescue Errno::ESRCH
    warn "[x] Process not found"
    rm(pid)
  end

  def pid
    Twenty.pid
  end
end
