class Builder
  ROOTDIR  = Dir.getwd
  STAGEDIR = File.join(ROOTDIR, "stage")
  PKGDIR   = File.join(ROOTDIR, "pkgs")
  PARENT   = File.basename File.realpath(File.join(__dir__, "..", "..", ".."))
  CHILDREN = %w[cli server client]
  include FileUtils

  def self.call(...)
    new.call(...)
  end
end

class GemSpec < Builder
  require "erb"
  def call(version)
    [PARENT, *CHILDREN].each do |node|
      path = find_path(node)
      spec = ERB.new(File.binread(path)).result_with_hash({parent: PARENT, version:})
      File.binwrite File.join(File.dirname(path), "#{node}.gemspec"), spec
    end
  end

  private

  def find_path(node)
    if node == PARENT
      File.join(Dir.getwd, "#{node}.gemspec.tt")
    else
      File.join(Dir.getwd,node, "#{node}.gemspec.tt")
    end
  end
end

class Copy < Builder
  def call(version)
    [PARENT, *CHILDREN].each do
      dest = File.join(STAGEDIR, version, _1)
      mkdir_p(dest)
      if _1 == PARENT
        sh "cp -fv *.gemspec #{dest}"
        sh "cp -Rfv lib/ #{dest}"
      else
        sh [
          "find #{_1}",
           excludes.map { |n| "-not -name #{n}" }.join(" "),
           "-mindepth 1 -maxdepth 1",
           "-exec cp -Rfv {} #{dest} \\;"
        ].join(" ")
      end
      chmod!(dest)
    end
  end

  private

  def chmod!(dest)
    sh "find #{dest} -type d -exec chmod u=rwx,g=rx,o=rx {} +"
    sh "find #{dest} -type f -exec chmod u=rw,g=r,o=r {} +"
    [File.join(dest, "libexec"), File.join(dest, "bin")].each do |exedir|
      next unless File.exist?(exedir)
      sh "find #{exedir} -type f -exec chmod u=rwx,g=rx,o=rx {} +"
    end
  end

  def excludes
    %w[.gems node_modules]
  end
end

class Build < Builder
  def call(version)
    dest = File.join(PKGDIR, version)
    mkdir_p(dest)
    [*CHILDREN, PARENT].each do |gem|
      Dir.chdir(File.join(STAGEDIR, version, gem)) do
        sh "gem build #{gem}.gemspec"
        sh "mv #{gem}-#{version}.gem #{dest}"
      end
    end
  end
end

class Deploy < Builder
  def call(version)
    Dir.chdir File.join(PKGDIR, version) do
      [*CHILDREN, PARENT].each do |gem|
        sh "gem push #{gem}-#{version}.gem"
      end
    end
  end
end
