import { TASK_STATUS } from "/types/schema";

type Params = {
  id?: number;
  status?: TASK_STATUS,
  title?: string;
  content?: string;
  projectId?: number;
};

export function useUpsertTask() {
  const normalize = (input: Params) => {
    const { id, title, content, status, projectId } = input;
    return { id, title, content, status, project_id: projectId };
  };
  return function ({ input }: { input: Params }) {
    return new Promise((accept, reject) => {
      const req = {
        method: input.id ? "PUT" : "POST",
        body: JSON.stringify(normalize(input)),
      };
      return fetch("/servlet/tasks", req)
        .then(res => res.json())
        .then(accept)
        .catch(reject);
    });
  };
}
