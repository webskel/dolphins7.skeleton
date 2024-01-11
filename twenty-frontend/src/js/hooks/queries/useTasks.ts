import { useQuery, gql } from "@apollo/client";
import { Task } from "/types/schema";

export const GET_TASKS = gql`
  query GetTasks($status: TaskStatus!) {
    tasks(status: $status) {
      id
      title
      status
      isReady
      updatedAt
      project {
        name
        color
      }
    }
  }
`;

export function useTasks({ ...rest }) {
  return useQuery<{ tasks: Task[] }>(GET_TASKS, rest);
}
