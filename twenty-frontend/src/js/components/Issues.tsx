import React from "react";
import { useIssues } from "/hooks/useIssues";
import { DateTime } from "luxon";

export function Issues() {
  const [issues] = useIssues();
  return (
    <div className="pure-u-1-1 issue-index">
      <div className="pure-u-5-5 issue-row">
        <div className="pure-u-2-5 issues-text">
          <strong>Issues</strong>
        </div>
        <div className="pure-u-3-5 new-issue-btn">
          <a href="/issues/new" className="pure-button pure-button-primary">
            New Issue
          </a>
        </div>
      </div>
      <hr />
      <ul className="pure-u-5-5 issue-items">
        {issues.map((issue, key) => {
          const { updated_at: updatedAt } = issue;
          const datetime = DateTime.fromISO(updatedAt);
          return (
            <li className="pure-u-5-5" key={key}>
              <a className="pure-u-2-5" href={`/issues/read#id=${issue.id}`}>
                {issue.title}
              </a>
              <div className="pure-u-3-5 updated-at">
                {datetime.toFormat("dd LLL, yyyy")} at{" "}
                {datetime.toFormat("HH:mm")}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
