class Builder
  ROOTDIR  = Dir.getwd
  STAGEDIR = File.join(ROOTDIR, "stage")
  PKGDIR   = File.join(ROOTDIR, "pkgs")
  PARENT   = "twenty.rb"
  CHILDREN = %w[twenty-cli twenty-backend twenty-frontend]
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
      spec = ERB.new(File.binread(path)).result_with_hash({version:})
      File.binwrite File.join(File.dirname(path), "#{node}.gemspec"), spec
    end
  end

  private

  def find_path(node)
    if node == PARENT
      File.join(Dir.getwd, "#{node}.gemspec.erb")
    else
      File.join(Dir.getwd,node, "#{node}.gemspec.erb")
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
        sh "cp -Rfv #{_1}/* #{dest}"
      end
      sh "find #{dest} -type d -exec chmod u=rwx,g=rx,o=rx {} +"
      sh "find #{dest} -type f -exec chmod u=rw,g=r,o=r {} +"
      if _1 == "twenty-cli"
        sh "find #{dest}/libexec -type f -exec chmod u=rwx,g=rx,o=rx {} +"
      end
    end
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
