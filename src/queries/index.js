import gql from "graphql-tag";

export const BUSCAR_USUARIOS_QUERY = gql`
    query buscar_usuario($nombre: String!){
    #query buscar_usuario{
        search(query: $nombre, type:USER, first:10){
        #search(query: "john", type:USER, first:10){
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
