type Params = {
  id: number;
};

export function useDestroyTask() {
  return function ({ id }: Params) {
    return new Promise((accept, reject) => {
      const req = { method: "DELETE" };
      return fetch(`/servlet/tasks/${id}`, req)
        .then(res => res.json())
        .then(accept)
        .catch(reject);
    });
  };
}
