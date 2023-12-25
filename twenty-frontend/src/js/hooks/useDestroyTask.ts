import receiveResponse from "/lib/fetch/receive-response";

type Params = {
  id: number;
};

export function useDestroyTask() {
  return function ({ id }: Params) {
    return new Promise((resolve, reject) => {
      const req = { method: "DELETE" };
      return fetch(`/servlet/tasks/${id}`, req)
        .then(receiveResponse)
        .then(res => res.json())
        .then(resolve)
        .catch(reject);
    });
  };
}
