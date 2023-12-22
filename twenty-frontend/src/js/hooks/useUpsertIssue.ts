type Params = {
  id?: number;
  state?: "open" | "closed";
  title?: string;
  content?: string;
  connectionId?: number;
};

export function useUpsertIssue() {
  const normalize = (input: Params) => {
    const { id, title, content, connectionId } = input;
    return { id, title, content, connection_id: connectionId };
  };
  return function ({ input }: { input: Params }) {
    return new Promise((accept, reject) => {
      const req = {
        method: input.id ? "PUT" : "POST",
        body: JSON.stringify(normalize(input)),
      };
      return fetch("/servlet/issues", req)
        .then(res => res.json())
        .then(accept)
        .catch(reject);
    });
  };
}
