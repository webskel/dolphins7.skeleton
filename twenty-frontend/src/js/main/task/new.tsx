import React from "react";
import ReactDOM from "react-dom/client";
import { Task } from "/components/Task";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

(function () {
  const root = document.querySelector(".react-mount")!;
  const client = new ApolloClient({
    uri: "/servlet/graphql",
    cache: new InMemoryCache(),
  });
  ReactDOM.createRoot(root).render(
    <ApolloProvider client={client}>
      <Task />
    </ApolloProvider>,
  );
})();
