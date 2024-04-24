import { createContext } from "react";
type TContext = Record<"params" | "cookies", Record<string, string>>;
export const AppContext = createContext<TContext>({ params: {}, cookies: {} });
