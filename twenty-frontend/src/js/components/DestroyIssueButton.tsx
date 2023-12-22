import React from "react";
import { Issue } from "/types/schema";
import { useDestroyIssue } from "/hooks/useDestroyIssue";

type Props = {
  issue: Issue;
  onSuccess: (issue: Issue) => unknown;
};

export function DestroyIssueButton({ issue, onSuccess }: Props) {
  const destroy = useDestroyIssue();
  const onClick = () => {
    destroy({ id: issue.id }).then(() => onSuccess(issue));
  };

  return <button onClick={onClick}>Destroy</button>;
}
