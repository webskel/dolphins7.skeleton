type Params = {
  id: number;
};

export function useDestroyIssue() {
  return function ({ id }: Params) {
    return new Promise((accept, reject) => {
      const req = { method: "DELETE" };
      return fetch(`/servlet/issues/${id}`, req)
        .then(res => res.json())
        .then(accept)
        .catch(reject);
    });
  };
}
