import { useState, useEffect } from "react";
import { Issue } from "/types/schema";

type Result = {
  issues: Issue[];
  refetch: () => Promise<Issue[]>;
};

export function useIssues(): Result {
  const [issues, setIssues] = useState<Issue[]>([]);
  const set = (ary: Issue[]) => {
    setIssues(ary);
    return ary;
  };
  const refetch = async function (): Promise<Issue[]> {
    return await fetch("/servlet/issues")
      .then((res: Response) => res.json())
      .then((res: { issues: Issue[] }) => set(res.issues))
      .catch(() => null);
  };
  useEffect(() => {
    refetch();
  }, []);

  return { issues, refetch };
}
