type Params = {
  id?: number;
  state?: "open" | "closed";
  title?: string;
  content?: string;
  projectId?: number;
};

export function useUpsertTask() {
  const normalize = (input: Params) => {
    const { id, title, content, state, projectId } = input;
    return { id, title, content, state, project_id: projectId };
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
