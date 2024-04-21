import { gql, useMutation } from "@apollo/client";
import { CompleteTaskPayload, MutationCompleteTaskArgs } from "~/types/schema";

const GQL = gql`
  mutation CompleteTask($taskId: Int!) {
    completeTask(taskId: $taskId) {
      ok
      errors
    }
  }
`;

export function useCompleteTask() {
  return useMutation<CompleteTaskPayload, MutationCompleteTaskArgs>(GQL);
}
