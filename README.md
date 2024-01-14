## About

Twenty helps you manage your projects with a web application
that runs on your computer with a minimal amount of effort.

## Features

* Provides a command-line utility to start / stop a web server.
* Connect / disconnect a project from the command line.
* Works offline. Binds to `http//:localhost:2020` by default.
* Minimal: Ruby, and SQLite3 are the primary runtime dependencies.
* Easy to install, easy to use.

## Usage

    Usage: twenty COMMAND [OPTIONS]

    Commands:
      up             Start the twenty web server.
      down           Stop the twenty web server.
      connect        Connect a project to twenty.
      disconnect     Disconnect a project from twenty.
      migrate        Migrate the database.
      console        Start the twenty developer console.

## Install

    gem install twenty

## License

[BSD Zero Clause](https://choosealicense.com/licenses/0bsd/).
<br>
See [LICENSE](./LICENSE)
