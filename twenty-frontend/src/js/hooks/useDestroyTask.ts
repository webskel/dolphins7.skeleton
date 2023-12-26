import fetch from "/lib/fetch";

type Params = {
  id: number;
};

export function useDestroyTask() {
  return function ({ id }: Params) {
    return new Promise((resolve, reject) => {
      const reqinit = { method: "DELETE" };
      return fetch(`/servlet/tasks/${id}`, reqinit)
        .then(res => res.json())
        .then(resolve)
        .catch(reject);
    });
  };
}
