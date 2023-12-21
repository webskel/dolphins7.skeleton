import { useEffect, useState } from "react";

export function useLocationHash() {
  const [hash, setHash] = useState<string>("");

  function set() {
    const normalized = location.hash.substring(1, location.hash.length);
    setHash(normalized);
  }

  useEffect(set, [location.hash]);
  useEffect(() => {
    window.addEventListener("hashchange", set);
    return () => window.removeEventListener("hashchange", set);
  }, []);

  return [hash];
}
