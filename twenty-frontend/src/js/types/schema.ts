export const TASK_READY = "ready";
export const TASK_INPROGRESS = "in_progress";
export const TASK_COMPLETE = "complete";
export type TASK_STATUS = "ready" | "in_progress" | "complete";

export type Project = {
  id: number;
  name: string;
  path: string;
  color: string;
};

export type Task = {
  id: number;
  title: string;
  content: string;
  status: TASK_STATUS;
  project: Project;
  created_at: string;
  updated_at: string;
};
