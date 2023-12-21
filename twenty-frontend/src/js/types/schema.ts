export type Connection = {
  id: number;
  name: string;
  path: string;
};

export type Issue = {
  id: number,
  title: string,
  content: string,
  state: "open" | "closed",
  connection_id: number
}
