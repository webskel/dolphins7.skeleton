import { useState, useEffect } from "react";
import { Issue } from "/types/schema";

export function useIssues() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    fetch("/servlet/issues")
      .then(res => res.json())
      .then((res) => setIssues(res.issues));
  }, []);

  return [issues];
}
