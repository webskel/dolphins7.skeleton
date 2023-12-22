import React, { useState, useEffect } from "react";
import { useParams } from "/hooks/useParams";
import { Issue } from "/types/schema";
import { Issue as Component } from "/components/Issue";

export function ReadIssue() {
  const { id } = useParams();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/servlet/issues/${id}`)
      .then(res => res.json())
      .then(res => setIssue(res.issue));
  }, [id]);

  if (id?.length && issue) {
    return <Component issue={issue} />;
  } else {
    return null;
  }
}
