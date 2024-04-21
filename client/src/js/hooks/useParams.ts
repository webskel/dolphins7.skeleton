import { useEffect, useState } from "react";

export function useParams() {
  const [params, setParams] = useState<Record<string, string>>({});

  function set() {
    const entries = Object.fromEntries(
      location.hash
        .substring(1, location.hash.length)
        .split(",")
        .map(e => e.split("=")),
    );
    setParams(entries);
  }

  useEffect(set, [location.hash]);
  useEffect(() => {
    window.addEventListener("hashchange", set);
    return () => window.removeEventListener("hashchange", set);
  }, []);

  return params;
}
