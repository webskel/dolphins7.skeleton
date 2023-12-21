import React from "react";
import { useIssues } from "/hooks/useIssues";

export function Issues() {
  const [issues] = useIssues();
  return (
    <>
      <span>Issues</span>
      <ul className="connections">
        {issues.map((issue, key) => {
          return (
            <li key={key}>
              <a href={`/issues/read#id=${issue.id}/`}>{issue.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
