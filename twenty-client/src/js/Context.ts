import { createContext } from "react";
export const ParamContext = createContext<Record<string, string>>({});
export const CookieContext = createContext<Record<string, string>>({});
