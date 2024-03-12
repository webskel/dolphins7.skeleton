import { PropsWithChildren } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ParamContext, CookieContext } from "~/Context";

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
  const cookies = Object.fromEntries(
    document.cookie.split(";").map(e => e.split("=")),
  );
  return (
    <CookieContext.Provider value={cookies}>
      <ParamContext.Provider value={params}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </ParamContext.Provider>
    </CookieContext.Provider>
  );
}
