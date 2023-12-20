type Params = {
  title: string,
  content: string,
  connection_id: number
};

export function useCreateIssue() {
  return [
    function({params}: {params: Params}) {
      return new Promise((accept, reject) => {
        const req = {
          method: 'POST',
          body: JSON.stringify(params)
        };
        return fetch('/servlet/issues', req)
          .then(accept)
          .catch(reject);
      });
    }
  ];
}
