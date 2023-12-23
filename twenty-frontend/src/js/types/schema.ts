export type Project = {
  id: number;
  name: string;
  path: string;
};

export type Task = {
  id: number;
  title: string;
  content: string;
  state: "open" | "closed";
  created_at: string;
  updated_at: string;
  project_id: number;
};
