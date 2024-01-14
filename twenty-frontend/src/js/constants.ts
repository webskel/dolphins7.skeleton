import { InMemoryCache } from "@apollo/client";
export const CLIENT_OPTIONS = {
  uri: "/graphql",
  cache: new InMemoryCache(),
}
