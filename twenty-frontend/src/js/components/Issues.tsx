import React from "react";
import { useIssues } from "/hooks/useIssues";
import { useDestroyIssue } from "/hooks/useDestroyIssue";
import { TrashIcon } from "/components/Icons";
import { DateTime } from "luxon";
import { Issue } from "/types/schema";

export function Issues() {
  const { issues, setIssues } = useIssues();
  const destroyIssue = useDestroyIssue();
  const onDestroy = (issue: Issue) => {
    destroyIssue({id: issue.id})
      .then(() => issues.filter((i) => i.id !== issue.id))
      .then((issues) => setIssues(issues));
  }

  return (
    <div className="table">
      <div className="table div">Issues</div>
      <div className="table content">
        <ul className="items">
          {issues.map((issue: Issue, key: number) => {
            const { updated_at: updatedAt } = issue;
            const datetime = DateTime.fromISO(updatedAt);
            return (
              <li className="item" key={key}>
                <div className="top">
                  <a href={`/issues/edit#id=${issue.id}`}>
                    <span className="item title">{issue.title}</span>
                  </a>
                  <span><TrashIcon onClick={() => onDestroy(issue)} /></span>
                </div>
                <div className="bottom">
                  <span>
                    {datetime.toFormat("dd LLL, yyyy")} at{" "}
                    {datetime.toFormat("HH:mm")}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
