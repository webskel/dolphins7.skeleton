import React from "react";
import { useIssues } from "/hooks/useIssues";

export function Issues() {
  const [issues] = useIssues();
  return (
    <div className="pure-u-1-1 issue-index">
      <div className="pure-u-2-5">
        <span>Issues</span>
      </div>
      <div className="pure-u-3-5 new-issue-btn">
        <button className="pure-button pure-button-primary">
          <a href="/issues/new">New Issue</a>
        </button>
      </div>
      <ul className="pure-u-5-5">
        {issues.map((issue, key) => {
          return (
            <li key={key}>
              <a href={`/issues/read#id=${issue.id}/`}>{issue.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
