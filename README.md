## About

...

## Features

* Provides a web application that manages hobby projects.
* Provides a command-line utility to start / stop a web server.
* The web server binds to localhost:7778 by default.
* Works online, or offline.
* Lightweight: Ruby, and SQLite3 are the primary dependencies.
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
