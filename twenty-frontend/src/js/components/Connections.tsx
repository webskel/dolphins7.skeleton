import React from "react";
import { useConnections } from "/hooks/useConnections";

export function Connections() {
  const [connections] = useConnections();
  return (
    <>
      <span>Connections</span>
      <ul className="connections">
        {connections.map((conn, i) => {
          return <li key={i}>{conn.name}</li>;
        })}
      </ul>
    </>
  );
}
