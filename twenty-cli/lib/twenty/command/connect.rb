class Twenty::Command::Connect < Twenty::Command
  require "fileutils"
  include Twenty::DB
  include FileUtils

  set_banner usage: "twenty connect [OPTIONS]",
             description: "Connect a project to twenty"

  def run
    options = parse_options(argv)
    options.help ? show_help : run_command(options)
  end

  private

  def run_command(options)
    mkdir_p File.dirname(database_path)
    path = Dir.getwd
    name = File.basename(path)
    db.connections.push({name:, path:})
    save!(db)
  end

  def db
    @db ||= database
  end
end
