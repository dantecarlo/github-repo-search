import gql from "graphql-tag";

export const BUSCAR_USUARIOS_QUERY = gql`
  query buscar_usuario($nombre: String!, $pagina: String) {
    search(query: $nombre, type: USER, first: 10, after: $pagina) {
      userCount
      pageInfo {
        startCursor
        hasPreviousPage
        hasNextPage
        endCursor
      }
      edges {
        node {
          ... on User {
            id
            name
            login
            location
            avatarUrl
          }
        }
      }
    }
  }
`;

export const REPOSITORIO_USUARIO = gql`
  query buscar_usuario($nombre: String!, $pagina: String) {
    search(query: $nombre, type: USER, first: 10, after: $pagina) {
      edges {
        node {
          ... on User {
            id
            login
            repositories(
              last: 5
              orderBy: { direction: ASC, field: PUSHED_AT }
            ) {
              edges {
                node {
                  name
                  description
                  pullRequests(last: 100) {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
