import React, { Fragment, Component } from "react";
import { Query } from "react-apollo";
import "./Usuarios.css";

import { BUSCAR_USUARIOS_QUERY } from "../queries";
import { variablesInOperation } from "apollo-utilities";


export default class Usuarios extends Component {
  state = {
    nombre: ' '
  }

  render() {
    return (
      <Fragment>
        <div className="header">
          <div>
            <h1 className="text-Left title-style">Github Users</h1>
          </div>
          <div className="form-style">
            <form onSubmit={e => {
              e.preventDefault();
            }}>

              <input type="search"
                placeholder="Search Github Users"
                onChange={e => {
                  this.setState({
                    ...this.state,
                    nombre: e.target.value
                  })
                }}
              />

            </form>
          </div>
        </div>

        <div>
          <Query query={BUSCAR_USUARIOS_QUERY} variables={"john"}>
            {({ loading, error, data }) => {
              if (loading) return "Cargando...";
              if (error) return `Error: ${error.message}`;
              return (
                <ul className="list-group list-group-flush">
                  {data.search.edges.map(item => (
                    <li key={item.id} className="list-group-item">
                      <div className="d-inline-block text-center">
                        <img
                          key={item.id}
                          src={item.node.avatarUrl}
                          className="image rounded-circle"
                          alt="avatar"
                        />
                      </div>
                      <div className="d-inline-block data">
                        <span className="name">
                          {item.node.name}, {item.node.location}
                        </span>
                        <br />
                        <span className="login">{item.node.login}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )
            }}
          </Query>
        </div>
      </Fragment >
    )
  }
}


/*const Usuarios = () => (
  <Query query={BUSCAR_USUARIOS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Cargando...";
      if (error) return `Error: ${error.message}`;
      console.log(data.search.edges);

      return (
        <Fragment>
          <Header />

          <div>
            <ul className="list-group list-group-flush">
              {data.search.edges.map(item => (
                <li key={item.id} className="list-group-item">
                  <div className="d-inline-block text-center">
                    <img
                      key={item.id}
                      src={item.node.avatarUrl}
                      className="image rounded-circle"
                      alt="avatar"
                    />
                  </div>
                  <div className="d-inline-block data">
                    <span className="name">
                      {" "}
                      {item.node.name}, {item.node.location}
                    </span>
                    <br />
                    <span className="login">{item.node.login}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Fragment>
      );
    }}
  </Query>
);

export default Usuarios;
*/