import { ApolloCache, useMutation, gql } from "@apollo/client";
import {
  SetRandomProjectColorPayload,
  MutationSetRandomProjectColorArgs,
  Project,
} from "~/types/schema";

const GQL = gql`
  mutation SetRandomProjectColor($projectId: Int!) {
    setRandomProjectColor(projectId: $projectId) {
      project {
        id
        color
      }
      errors
    }
  }
`;

type TArgs = {
  variables: { projectId: number };
};

export function useSetRandomProjectColor() {
  const [setRandomProjectColor] = useMutation<
    SetRandomProjectColorPayload,
    MutationSetRandomProjectColorArgs
  >(GQL);

  return ({ variables }: TArgs) => {
    return setRandomProjectColor({
      variables,
      update(cache, { data }) {
        const project: Project = data.project;
        modify(cache, project);
      },
    });
  };
}

const modify = (
  cache: ApolloCache<SetRandomProjectColorPayload>,
  project: Project,
) => {
  cache.modify({
    id: cache.identify(project),
    fields: {
      projects(existingProjects = []) {
        cache.writeFragment({
          id: cache.identify(project),
          data: { project },
          fragment: gql`
            fragment P on Project {
              color
            }
          `,
        });
        return [...existingProjects, project];
      },
    },
  });
};
