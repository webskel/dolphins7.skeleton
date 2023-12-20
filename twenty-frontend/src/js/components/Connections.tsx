import React from "react";
import { useConnections } from "/hooks/useConnections";

export function Connections() {
  const connections = useConnections();
  const items = connections.map((conn, i) => {
    return (<li key={i}>{conn.name}</li>);
  })

  return (
    <>
      <span>Connections</span>
      <ul className="connections">
        {items}
      </ul>
    </>
  )
}
