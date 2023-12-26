import { TASK_STATUS } from "/types/schema";
import fetch from "/lib/fetch";

type Params = {
  id?: number;
  status?: TASK_STATUS;
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
    return new Promise((resolve, reject) => {
      const reqinit = {
        method: input.id ? "PUT" : "POST",
        body: JSON.stringify(normalize(input)),
      };
      return fetch("/servlet/tasks", reqinit)
        .then(res => res.json())
        .then(resolve)
        .catch(reject);
    });
  };
}
