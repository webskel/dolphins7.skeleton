import React from "react";
import { useIssues } from "/hooks/useIssues";

export function Issues() {
  const [issues] = useIssues();
  console.log({issues})
  return (
    <>
      <span>Issues</span>
      <ul className="connections">
        {issues.map((issue, key) => {
          return (<li key={key}>{issue.title}</li>);
        })}
      </ul>
    </>
  );
}
