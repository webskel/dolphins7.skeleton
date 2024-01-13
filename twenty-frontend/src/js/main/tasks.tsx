import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { Tasks } from "/components/Tasks";

(function () {
  const root = document.querySelector(".react-root")!;
  const client = new ApolloClient({
    uri: "/servlet/graphql",
    cache: new InMemoryCache(),
  });
  ReactDOM.createRoot(root).render(
    <ApolloProvider client={client}>
      <Tasks />
    </ApolloProvider>,
  );
})();
