import { useQuery, gql } from "@apollo/client";

const GQL = gql`
  query Query {
    projects {
      id
      name
      path
      color
      openTaskCount
    }
  }
`;

export function useProjects() {
  return useQuery(GQL);
}
