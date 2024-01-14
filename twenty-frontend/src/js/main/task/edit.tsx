import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import { CLIENT_OPTIONS } from "/constants";
import { Task as Component } from "/components/Task";

(function () {
  const params = Object.fromEntries(
    location.hash
      .substring(1, location.hash.length)
      .split(",")
      .map(e => e.split("=")),
  );
  const client = new ApolloClient(CLIENT_OPTIONS);
  const root = document.querySelector(".react-root")!;
  ReactDOM.createRoot(root).render(
    <ApolloProvider client={client}>
      <Component taskId={Number(params.id)} />
    </ApolloProvider>,
  );
})();
