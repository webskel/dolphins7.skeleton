import {
  UpdateTaskPayload,
  MutationUpdateTaskArgs,
  TaskInput,
} from "/types/schema";
import { gql, useMutation } from "@apollo/client";

const GQL = gql`
  mutation UpdateTask($taskId: Int!, $input: TaskInput!) {
    updateTask(taskId: $taskId, input: $input) {
      errors
    }
  }
`;

type TArgs = {
  variables: { taskId: number; input: TaskInput };
};

export function useUpdateTask() {
  const [update] = useMutation<UpdateTaskPayload, MutationUpdateTaskArgs>(GQL);
  return ({ variables: { taskId, input }, ...rest }: TArgs) => {
    const projectId = Number(input.projectId);
    const variables = {
      taskId,
      input: { ...input, ...{ projectId } },
    };
    return update({ variables, ...rest });
  };
}
