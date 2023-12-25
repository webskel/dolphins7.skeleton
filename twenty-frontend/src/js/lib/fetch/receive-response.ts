export default function(res: Response) {
  if (res.status === 200) {
    return res;
  } else {
    throw Error("Bad response", {cause: res});
  }
}
