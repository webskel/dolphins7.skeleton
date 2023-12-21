import { useState, useEffect } from "react";

type Connection = {
  id: number;
  name: string;
  path: string;
};

export function useConnections() {
  const [conns, setConns] = useState<Connection[]>([]);

  useEffect(() => {
    fetch("/servlet/connections")
      .then(res => res.json())
      .then((res) => setConns(res.connections));
  }, []);

  return [conns];
}
