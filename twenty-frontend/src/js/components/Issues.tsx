import React from "react";
import { useIssues } from "/hooks/useIssues";
import { useDestroyIssue } from "/hooks/useDestroyIssue";
import { TrashIcon, DoneIcon } from "/components/Icons";
import { DateTime } from "luxon";
import { Issue } from "/types/schema";
import { useUpsertIssue } from "hooks/useUpsertIssue";

export function Issues() {
  const { issues, setIssues } = useIssues();
  const upsertIssue = useUpsertIssue();
  const destroyIssue = useDestroyIssue();
  const onDestroy = (issue: Issue) => {
    destroyIssue({id: issue.id})
      .then(() => issues.filter((i) => i.id !== issue.id))
      .then((issues) => setIssues(issues));
  }
  const onDone = (issue: Issue) => {
    upsertIssue({input: {id: issue.id, state: "closed"}})
      .then(() => issues.filter((i) => i.id !== issue.id))
      .then((issues) => setIssues(issues));
  }
  return (
    <div className="table">
      <div className="table div">
        <span>Tasks</span>
        <a href="/issues/new">New task</a>
      </div>
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
                  <div className="actions">
                    <DoneIcon onClick={() => onDone(issue)} />
                    <TrashIcon onClick={() => onDestroy(issue)}/>
                  </div>
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
