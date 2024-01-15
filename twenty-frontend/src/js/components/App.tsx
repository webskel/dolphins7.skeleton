import React, { PropsWithChildren } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export function App({children}: PropsWithChildren<{}>) {
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
