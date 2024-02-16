source "https://rubygems.org"
gemspec
gem "twenty-cli", path: "./twenty-cli"
gem "twenty-server", path: "./twenty-server"
gem "twenty-client", path: "./twenty-client"

require 'rbconfig'
gem "listen"
case RbConfig::CONFIG['target_os']
when /(?i-mx:bsd|dragonfly)/
  gem 'rb-kqueue', '>= 0.2'
else
   # Poll
end
