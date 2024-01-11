import { useQuery, gql } from "@apollo/client";

const GQL = gql`
  query Query {
    tasks {
      id
      title
      status
      updatedAt
      project {
        name
        color
      }
    }
  }
`;

export function useTasks() {
  return useQuery(GQL);
}
