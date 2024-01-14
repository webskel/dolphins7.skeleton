import React from "react";
import ReactDOM from "react-dom/client";
import { CLIENT_OPTIONS } from "/constants";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { Tasks } from "/components/Tasks";

(function () {
  const root = document.querySelector(".react-root")!;
  const client = new ApolloClient(CLIENT_OPTIONS);
  ReactDOM.createRoot(root).render(
    <ApolloProvider client={client}>
      <Tasks />
    </ApolloProvider>,
  );
})();
