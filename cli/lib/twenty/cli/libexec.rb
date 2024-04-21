# frozen_string_literal: true

def spawn(exec, *)
  libexec_dir = File.realpath(File.join(__dir__, "..", "..", "..", "libexec", "twenty"))
  Process.spawn(File.join(libexec_dir, exec), *)
end

def wait(pid)
  Process.wait(pid)
rescue Interrupt
  retry
end
