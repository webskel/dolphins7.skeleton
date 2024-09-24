## About

dolphins7 is a [webskel](https://github.com/webskel/cli) skeleton.
The **Design** section describes how it is organized.

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

    Usage: cli COMMAND [OPTIONS]

    Commands:
      up             Start the twenty web server
      down           Stop the twenty web server
      migrate        Migrate the database
      console        Start the twenty developer console

## Install

	user@localhost$ webskel new myapp dolphins7

## Sources

* [GitHub](https://github.com/webskel/dolphins7.skeleton#readme)
* [GitLab](https://gitlab.com/0x1eef/dolphins7.skeleton#about)
* [brew.bsd.cafe/@webskel](https://brew.bsd.cafe/webskel/dolphins7.skeleton#about)

## License

[BSD Zero Clause](https://choosealicense.com/licenses/0bsd/).
<br>
See [LICENSE](./LICENSE)
