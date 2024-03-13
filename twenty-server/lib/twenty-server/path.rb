# frozen_string_literal: true

module Twenty::Path
  ##
  # @return [String]
  #  Returns the directory where twenty stores persistent data.
  def datadir
    File.join(Dir.home, ".local", "share", "twenty")
  end

  ##
  # @return [String]
  #  Returns the directory where twenty stores temporary data.
  def tmpdir
    File.join(Dir.tmpdir, "twenty")
  end

  ##
  # @return [String]
  #  Returns the file where twenty can write the PID of
  #  a web server running in the background.
  def pidfile
    File.join(tmpdir, "server.pid")
  end
end
