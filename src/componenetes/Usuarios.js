import React from "react";
import { Query } from "react-apollo";

import { BUSCAR_USUARIOS_QUERY } from "../queries";

const Usuarios = () => (
  <Query query={BUSCAR_USUARIOS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Cargando...";
      if (error) return `Error: ${error.message}`;
    }}
  </Query>
);

export default Usuarios;
