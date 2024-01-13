import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { Task as Component } from "/components/Task";
import { ApolloClient, InMemoryCache } from "@apollo/client";

(function () {
  const params = Object.fromEntries(
    location.hash
      .substring(1, location.hash.length)
      .split(",")
      .map(e => e.split("=")),
  );
  const client = new ApolloClient({
    uri: "/servlet/graphql",
    cache: new InMemoryCache(),
  });
  const root = document.querySelector(".react-mount")!;
  ReactDOM.createRoot(root).render(
    <ApolloProvider client={client}>
      <Component taskId={Number(params.id)} />
    </ApolloProvider>,
  );
})();
