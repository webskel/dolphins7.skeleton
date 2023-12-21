import React, { useState, useEffect } from "react";
import { Issue } from "/types/schema";
import { useParams } from "/hooks/useParams";

export function ReadIssue() {
  const { id } = useParams();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/servlet/issues/${id}/`)
      .then(res => res.json())
      .then(res => setIssue(res.issue));
  }, [id]);

  if (id?.length && issue) {
    return <>{issue.title}</>;
  } else {
    return <>No issue</>;
  }
}
