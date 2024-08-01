import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { AppContext } from "~/Context";
import { Tasks } from "~/components/Tasks";
import { Task } from "~/components/Task";

export function App() {
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Tasks />,
    },
    {
      path: "/tasks",
      element: <Tasks />
    },
    {
      path: "/tasks/new",
      element: <Task />
    },
    {
      path: "/tasks/edit",
      element: <Task />
    }
  ]);
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
  loadDevMessages();
  loadErrorMessages();
  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={{ params, cookies }}/>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}
