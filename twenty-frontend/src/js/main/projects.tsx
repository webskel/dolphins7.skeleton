import React from "react";
import ReactDOM from "react-dom/client";
import { Projects } from "/components/Projects";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

(function () {
  const root = document.querySelector(".react-root")!;
  const client = new ApolloClient({
    uri: "/servlet/graphql",
    cache: new InMemoryCache(),
  });
  ReactDOM.createRoot(root).render(
    <ApolloProvider client={client}>
      <Projects />
    </ApolloProvider>,
  );
})();
