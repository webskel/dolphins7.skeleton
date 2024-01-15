import React, { PropsWithChildren } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ParamContext } from "/Context";

export function App({ children }: PropsWithChildren<{}>) {
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });
  const params = Object.fromEntries(
    location.hash
      .substring(1, location.hash.length)
      .split(",")
      .map(e => e.split("=")),
  );
  return (
    <ParamContext.Provider value={params}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ParamContext.Provider>
  );
}
