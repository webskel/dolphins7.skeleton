import React from "react";
import ReactDOM from "react-dom/client";
import { Projects } from "/components/Projects";
import { CLIENT_OPTIONS } from "/constants";
import { ApolloProvider, ApolloClient } from "@apollo/client";

(function () {
  const root = document.querySelector(".react-root")!;
  const client = new ApolloClient(CLIENT_OPTIONS);
  ReactDOM.createRoot(root).render(
    <ApolloProvider client={client}>
      <Projects />
    </ApolloProvider>,
  );
})();
