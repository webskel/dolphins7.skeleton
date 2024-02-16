import { gql, useMutation } from "@apollo/client";
import { DestroyTaskPayload, MutationDestroyTaskArgs } from "~/types/schema";

const GQL = gql`
  mutation DestroyTask($taskId: Int!) {
    destroyTask(taskId: $taskId) {
      ok
      errors
    }
  }
`;

export function useDestroyTask() {
  return useMutation<DestroyTaskPayload, MutationDestroyTaskArgs>(GQL);
}
