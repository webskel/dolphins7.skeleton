import { useState, useEffect } from "react";
import { Task } from "/types/schema";

type Result = {
  setTasks: (tasks: Task[]) => unknown;
  tasks: Task[];
  req: () => Promise<Task[]>;
};

export function useTasks(): Result {
  const [tasks, setTasks] = useState<Task[]>([]);
  const set = (ary: Task[]) => {
    setTasks(ary);
    return ary;
  };
  const req = async function (): Promise<Task[]> {
    return await fetch("/servlet/tasks")
      .then((res: Response) => res.json())
      .then((res: { tasks: Task[] }) => set(res.tasks))
      .catch(() => null);
  };
  useEffect(() => {
    req();
  }, []);

  return { tasks, setTasks: set, req };
}
