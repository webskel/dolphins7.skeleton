import { PropsWithChildren } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppContext } from "~/Context";

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
  /* allowlist: param keys acceptable as cookie keys */
  const allowlist = ["projectId"];
  Object.entries(params).forEach(([key, value]) => {
    if (
      allowlist.includes(key) &&
      cookies[key] !== value &&
      /^[0-9A-Za-z]+$/.test(String(value))
    ) {
      document.cookie = `${key}=${value}; path=/`;
    }
  });
  return (
    <AppContext.Provider value={{ params, cookies }}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </AppContext.Provider>
  );
}
