import React from "react";
import { useIssues } from "/hooks/useIssues";

export function Issues() {
  const [issues] = useIssues();
  return (
    <>
      <span>Issues</span>
      <ul className="connections">
        {issues.map((issue, key) => {
          return <li key={key}>{issue.title}</li>;
        })}
      </ul>
    </>
  );
}
