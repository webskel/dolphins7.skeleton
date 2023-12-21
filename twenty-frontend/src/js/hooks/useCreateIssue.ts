type Params = {
  title: string;
  content: string;
  connectionId: number;
};

export function useCreateIssue() {
  return [
    function ({ input }: { input: Params }) {
      return new Promise((accept, reject) => {
        const {connectionId: connection_id, title, content} = input;
        const req = {
          method: "POST",
          body: JSON.stringify({connection_id, title, content})
        };
        return fetch("/servlet/issues", req)
          .then(res => res.json())
          .then(accept)
          .catch(reject);
      });
    },
  ];
}
