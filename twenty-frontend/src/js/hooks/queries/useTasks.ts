import { useQuery, gql } from "@apollo/client";
import { Task, TaskStatus } from "/types/schema";

const GQL = gql`
  query Query($status: TaskStatus!) {
    tasks(status: $status) {
      id
      title
      status
      updatedAt
      project {
        name
        color
      }
    }
  }
`;

export function useTasks({...rest}) {
  return useQuery<{tasks: Task[]}>(GQL, rest);
}
