type Params = {
  id?: number;
  state?: "open" | "closed";
  title?: string;
  content?: string;
  connectionId?: number;
};

export function useUpsertTask() {
  const normalize = (input: Params) => {
    const { id, title, content, state, connectionId } = input;
    return { id, title, content, state, connection_id: connectionId };
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
