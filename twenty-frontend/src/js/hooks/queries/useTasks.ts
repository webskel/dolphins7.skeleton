import { useQuery, gql } from "@apollo/client";
import { Task } from "/types/schema";

export const GET_TASKS = gql`
  query GetTasks($status: TaskStatus!, $projectId: Int) {
    tasks(status: $status, projectId: $projectId) {
      id
      title
      status
      isReady
      updatedAt
      project {
        id
        name
        color
      }
    }
  }
`;

export function useTasks({ ...rest }) {
  return useQuery<{ tasks: Task[] }>(GET_TASKS, rest);
}
