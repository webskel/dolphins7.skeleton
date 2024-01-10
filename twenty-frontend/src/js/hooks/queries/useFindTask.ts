import { gql, useQuery } from "@apollo/client";
import { Maybe, Task } from "/types/schema";

const GQL = gql`
  query Query($taskId: Int!) {
    findTask(taskId: $taskId) {
      id
      title
      content
      status
      project {
        id
        name
      }
    }
  }
`;

export function useFindTask(taskId: Maybe<number>) {
  if (taskId) {
    return useQuery(GQL, { variables: { taskId } });
  } else {
    const result: { data: Maybe<Task>; loading: boolean } = {
      data: null,
      loading: false,
    };
    return result;
  }
}
