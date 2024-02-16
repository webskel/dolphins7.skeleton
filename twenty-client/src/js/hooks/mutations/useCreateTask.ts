import {
  CreateTaskPayload,
  MutationCreateTaskArgs,
  TaskInput,
} from "~/types/schema";
import { gql, useMutation } from "@apollo/client";

const GQL = gql`
  mutation CreateTask($input: TaskInput!) {
    createTask(input: $input) {
      errors
    }
  }
`;

type TArgs = {
  variables: { input: TaskInput };
};

export function useCreateTask() {
  const [create] = useMutation<CreateTaskPayload, MutationCreateTaskArgs>(GQL);
  return ({ variables: { input }, ...rest }: TArgs) => {
    const projectId = Number(input.projectId);
    const variables = { input: { ...input, ...{ projectId } } };
    return create({ variables, ...rest });
  };
}
