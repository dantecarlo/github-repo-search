import React, { Fragment, Component } from "react";
import { Query } from "react-apollo";
import "./Usuarios.css";

import { BUSCAR_USUARIOS_QUERY } from "../queries";
import { Link } from "react-router-dom";

export default class Usuarios extends Component {
  state = {
    nombre: " "
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div>
            <h1 className="text-Left title-style">
              <strong>Github Users</strong>
            </h1>
          </div>
          <div className="form-style">
            <form
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <input
                type="search"
                placeholder="Search Github Users"
                onChange={e => {
                  this.setState({
                    ...this.state,
                    nombre: e.target.value
                  });
                }}
              />
            </form>
          </div>
        </div>

        <div>
          <Query
            query={BUSCAR_USUARIOS_QUERY}
            variables={{ nombre: this.state.nombre }}
          >
            {({ loading, error, data }) => {
              if (loading) return "Cargando...";
              if (error)
                return (
                  <p className="alert alert-danger p-3 text-center">
                    {" "}
                    {`Error: ${error.message}`} Press shift + F5 ;){" "}
                  </p>
                );
              if (data.search.edges.length !== 0 || this.state.nombre === " ")
                return (
                  <ul className="list-group list-group-flush">
                    {data.search.edges.map(item => (
                      <li className="list-group-item">
                        <Link to={`/repositorios/${item.node.login}`}>
                          <div className="d-inline-block text-center text-link">
                            <img
                              src={item.node.avatarUrl}
                              className="backArrow rounded-circle"
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
                        </Link>
                      </li>
                    ))}
                  </ul>
                );
              else
                return (
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="name">No Results</span>
                    </li>
                  </ul>
                );
            }}
          </Query>
        </div>
      </Fragment>
    );
  }
}
