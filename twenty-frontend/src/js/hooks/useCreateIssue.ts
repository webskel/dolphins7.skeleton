type Params = {
  title: string;
  content: string;
  connectionId: number;
};

export function useCreateIssue() {
  return [
    function ({ input }: { input: Params }) {
      return new Promise((accept, reject) => {
        const { connectionId, title, content } = input;
        const req = {
          method: "POST",
          body: JSON.stringify({ connection_id: connectionId, title, content }),
        };
        return fetch("/servlet/issues", req)
          .then(res => res.json())
          .then(accept)
          .catch(reject);
      });
    },
  ];
}
