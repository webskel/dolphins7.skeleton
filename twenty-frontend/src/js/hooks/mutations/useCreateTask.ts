import { CreateTaskPayload, MutationCreateTaskArgs } from "/types/schema";
import { gql, useMutation } from "@apollo/client";

const GQL = gql`
  mutation CreateTask($input: TaskInput!) {
    createTask(input: $input) {
      errors
    }
  }
`;

export function useCreateTask() {
  return useMutation<CreateTaskPayload, MutationCreateTaskArgs>(GQL);
}
