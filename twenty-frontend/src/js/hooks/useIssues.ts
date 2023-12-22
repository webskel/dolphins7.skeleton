import { useState, useEffect } from "react";
import { Issue } from "/types/schema";

type Result = {
  setIssues: (issues: Issue[]) => unknown;
  issues: Issue[];
  req: () => Promise<Issue[]>;
};

export function useIssues(): Result {
  const [issues, setIssues] = useState<Issue[]>([]);
  const set = (ary: Issue[]) => {
    setIssues(ary);
    return ary;
  };
  const req = async function (): Promise<Issue[]> {
    return await fetch("/servlet/issues")
      .then((res: Response) => res.json())
      .then((res: { issues: Issue[] }) => set(res.issues))
      .catch(() => null);
  };
  useEffect(() => {
    req();
  }, []);

  return { issues, setIssues, req };
}
