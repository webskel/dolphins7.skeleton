## About

Twenty helps you manage and plan your open source projects with a
standalone web application that's designed to run on localhost or
within your local network. It is both easy to use, and easy to install.

## Features

* Provides a command-line utility to start / stop a web server.
* Connect / disconnect a project from the command line.
* Works offline. Binds to `http://localhost:2020` by default.
* Minimal: Ruby, and SQLite3 are the primary runtime dependencies.
* Easy to install, easy to use.

## Design

* The server is powered by [ruby/webrick](https://github.com/ruby/webrick):
    - Accepts GraphQL requests at `/graphql`.
    - Serves client (HTML, JS, CSS).
    - Dependencies: ActiveRecord, SQLite3, ruby-graphql.
* The client is a statically compiled [nanoc](https://github.com/nanoc/nanoc) website:
    - Dependencies: webpack, typescript, react.
* The CLI controls the web server:
    - Start / stop web server.
    - Run database migrations.
    - Run developer console.
* Each component (server, client, cli) are separate packages
  in a monorepo.
* Easy to distribute as a RubyGem.

## Usage

**CLI**

    Usage: twenty COMMAND [OPTIONS]

    Commands:
      up             Start the twenty web server.
      down           Stop the twenty web server.
      connect        Connect a project to twenty.
      disconnect     Disconnect a project from twenty.
      migrate        Migrate the database.
      console        Start the twenty developer console.

## Install

    $ gem install twenty.rb

## License

[BSD Zero Clause](https://choosealicense.com/licenses/0bsd/).
<br>
See [LICENSE](./LICENSE)
