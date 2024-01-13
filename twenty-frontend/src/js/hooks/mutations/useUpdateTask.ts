import {
  UpdateTaskPayload,
  MutationUpdateTaskArgs,
  TaskInput,
} from "/types/schema";
import { gql, useMutation, DocumentNode } from "@apollo/client";

const GQL = gql`
  mutation UpdateTask($taskId: Int!, $input: TaskInput!) {
    updateTask(taskId: $taskId, input: $input) {
      errors
    }
  }
`;

type TArgs = {
  variables: { taskId: number; input: TaskInput };
  refetchQueries?: Array<string | DocumentNode>;
  awaitRefetchQueries?: boolean;
};

export function useUpdateTask() {
  const [update] = useMutation<UpdateTaskPayload, MutationUpdateTaskArgs>(GQL);
  return ({
    awaitRefetchQueries,
    refetchQueries,
    variables: { taskId, input },
    ...rest
  }: TArgs) => {
    const projectId = input.projectId ? Number(input.projectId) : null;
    const variables = { taskId, input: {} };
    Object.assign(
      variables,
      projectId ? { input: { ...input, projectId } } : { input },
    );
    return update({ variables, awaitRefetchQueries, refetchQueries, ...rest });
  };
}
