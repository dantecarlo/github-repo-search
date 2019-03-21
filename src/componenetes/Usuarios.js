import React, { Fragment } from "react";
import { Query } from "react-apollo";

import { BUSCAR_USUARIOS_QUERY } from "../queries";

const Usuarios = () => (
  <Query query={BUSCAR_USUARIOS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Cargando...";
      if (error) return `Error: ${error.message}`;
      console.log(data.search.edges);
      

      return (
        //<h2 className="text-center">Listado de Usuarios</h2>
        <Fragment>
          <h2 className="text-center">Listado de Usuarios</h2>
          <ul className="list-group">
            {data.search.edges.map(item => (
              <li key={item.id} className="list-group-item">
                <div className="row justify-content-between align-item-center">
                  <div className="col-md-8 d-flex justify-content-between align-item-center">
                    {item.node.avatarUrl} - {item.node.name} - {item.node.location} - {item.node.login}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    }}
  </Query>
);

export default Usuarios;
