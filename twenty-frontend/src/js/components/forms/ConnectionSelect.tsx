import { useConnections } from "/hooks/useConnections";
import React from "react";

export function ConnectionSelect() {
  const connections = useConnections();
  const options = connections.map((conn) => {
    return <option value={conn.id}>{conn.name}</option>
  })
  return (<select name="connection_id">{options}</select>)
}
