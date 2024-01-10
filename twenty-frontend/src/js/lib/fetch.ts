export default async function (
  path: string,
  reqinit: RequestInit,
): Promise<Response> {
  return await fetch(path, reqinit).then(res => {
    if (res.status === 200) {
      return res;
    } else {
      throw Error("Bad response", { cause: res });
    }
  });
}
