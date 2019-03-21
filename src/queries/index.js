import gql from "graphql-tag";

export const BUSCAR_USUARIOS_QUERY = gql`
    query buscar_usuario($nombre: String!){
        search(query: $nombre, type:USER, first:10){
            userCount
            edges {
                node {
                    ... on User {
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
