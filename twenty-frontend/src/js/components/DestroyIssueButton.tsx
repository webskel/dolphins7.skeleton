import React from "react";
import { Issue } from "/types/schema";
import { useDestroyIssue } from "/hooks/useDestroyIssue";

type Props = {
  issue: Issue;
  onSuccess: () => unknown;
};

export function DestroyIssueButton({ issue, onSuccess }: Props) {
  const destroy = useDestroyIssue();
  const onClick = () => {
    destroy({ id: issue.id }).then(onSuccess);
  };

  return <button onClick={onClick}>Destroy</button>;
}
