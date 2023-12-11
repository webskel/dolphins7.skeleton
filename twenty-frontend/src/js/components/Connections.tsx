import React, {useEffect, useState} from "react";

type Connection = {
  name: string;
  path: string;
}

export function Connections() {
  const [connections, setConnections] = useState<Connection[]>([]);
  const items = connections.map((conn, i) => {
    return (<li key={i}>{conn.name}</li>);
  })

  useEffect(() => {
    fetch("/connections.json")
    .then((res) => res.json())
    .then((conns: Connection[]) => setConnections(conns))
  }, []);


  return (
    <>
      <span>Connections</span>
      <ul className="connections">
        {items}
      </ul>
    </>
  )
}
