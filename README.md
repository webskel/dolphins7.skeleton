## About

Twenty is a standalone web application with a practical
purpose. But it's also a place where I can experiment with
a different stack for the development of [web] applications
in Ruby. See **Design** for more info.

## Design

* The [server/](server/) is powered by Ruby
    - [rack](https://github.com/rack/rack#readmne),
      [graphql-ruby](https://github.com/rmosolgo/graphql-ruby#readme),
      and [puma](https://github.com/puma/puma#readme)
    - The server provides the /graphql endpoint for client &lt;-&gt; server communication
    - The server serves static files (HTML, JS, CSS, ...) via [puma (Ruby HTTP server)](https://github.com/puma/puma#readme)
    - The /graphql endpoint enters the [graphql-ruby](https://github.com/rmosolgo/graphql-ruby#readme) stack
* The [client/](client/) is powered by NodeJS
    - [webpack](https://webpack.js.org/),
      [typescript](https://www.typescriptlang.org/),
      [react](https://react.dev/),
      and [react-router](https://reactrouter.com/en/main)
    - The client produces a build/ directory
    - The client provides static files (HTML, JS, CSS, ...)
    - The client provides routes via [react-router](https://reactrouter.com/en/main)
    - The client communicates with the server via [@apollo/client (GraphQL client)](https://www.apollographql.com/docs/react/)
* The [cli/](cli/) is powered by Ruby
    - Start / stop web server
    - Run database migrations
    - Run developer console
    - Available as a RubyGem executable
* Each component (server, client, cli) are separate packages
  in a monorepo
* Easy to distribute as a RubyGem

## Usage

**CLI**

    Usage: twenty COMMAND [OPTIONS]

    Commands:
      up             Start the twenty web server
      down           Stop the twenty web server
      connect        Connect a project to twenty
      disconnect     Disconnect a project from twenty
      migrate        Migrate the database
      console        Start the twenty developer console

## Install

Twenty is distributed as a RubyGem:

    $ gem install twenty

## Sources

* [GitHub](https://github.com/0x1eef/twenty)
* [GitLab](https://gitlab.com/0x1eef/twenty)

## License

[BSD Zero Clause](https://choosealicense.com/licenses/0bsd/).
<br>
See [LICENSE](./LICENSE)
