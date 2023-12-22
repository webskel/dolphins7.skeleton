import React from "react";
import { useIssues } from "/hooks/useIssues";
import { DestroyIssueButton } from "/components/DestroyIssueButton";
import { DateTime } from "luxon";
import { Issue } from "/types/schema";

export function Issues() {
  const { issues, refetch } = useIssues();

  return (
    <ul>
      {issues.map((issue: Issue, key: number) => {
        const { updated_at: updatedAt } = issue;
        const datetime = DateTime.fromISO(updatedAt);
        return (
          <li key={key}>
            <div className="item row">
              <div className="header">
                <a href={`/issues/read#id=${issue.id}`}>
                  <span className="item title">{issue.title}</span>
                </a>
              </div>
              <div className="footer">
                <div>
                  <DestroyIssueButton issue={issue} onSuccess={refetch} />
                </div>
                <span>
                  {datetime.toFormat("dd LLL, yyyy")} at{" "}
                  {datetime.toFormat("HH:mm")}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
