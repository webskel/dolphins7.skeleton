## About

Twenty helps you manage projects with a solution that runs on your computer
rather than in the cloud.

## Features

* Provides a web application that helps you manage projects.
* Provides a command-line utility to start / stop a web server, connect / disconnect a project.
* Works online, or offline. Binds to `http//:localhost:2020` by default.
* Lightweight: Ruby, and SQLite3 are the primary runtime dependencies.
* Database: `~/.local/share/twenty/twenty.sqlite`.
* Easy to install: `gem install twenty`.
* Easy to use: `$ twenty up`.

## Usage

    Usage: twenty COMMAND [OPTIONS]

    Commands:
      up             Start the twenty web server.
      down           Stop the twenty web server.
      connect        Connect a project to twenty.
      disconnect     Disconnect a project from twenty.

## Install

    gem install twenty

## License

[BSD Zero Clause](https://choosealicense.com/licenses/0bsd/).
<br>
See [LICENSE](./LICENSE)
