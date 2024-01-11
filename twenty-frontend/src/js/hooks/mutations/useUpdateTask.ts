import { UpdateTaskPayload, MutationUpdateTaskArgs } from "/types/schema";
import { gql, useMutation } from "@apollo/client";

const GQL = gql`
  mutation UpdateTask($taskId: Int!, $input: TaskInput!) {
    updateTask(taskId: $taskId, input: $input) {
      errors
    }
  }
`;

export function useUpdateTask() {
  return useMutation<UpdateTaskPayload, MutationUpdateTaskArgs>(GQL);
}
