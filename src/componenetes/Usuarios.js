import React, { Fragment, Component } from "react";
import { Query } from "react-apollo";
import "./Usuarios.css";

import { BUSCAR_USUARIOS_QUERY } from "../queries";
import { Link } from "react-router-dom";

import Paginador from "./Paginador";
export default class Usuarios extends Component {
  state = {
    nombre: " ",
    tieneAnterior: false,
    paginaActual: " ",
    paginaAnterior: " ",
    paginaSiguiente: " ",
    actual: 1,
    limite: 10
  };

  paginaAnterior = (act, ant) => () => {
    this.setState({
      ...this.state,
      paginaActual: this.state.paginaAnterior,
      paginaSiguiente: this.state.actual,
      paginaAnterior: ant,
      actual: this.state.actual - 1
    });
  };

  paginaSiguiente = (i, f) => () => {
    this.setState({
      ...this.state,
      paginaAnterior: this.state.paginaActual,
      paginaActual: i,
      paginaSiguiente: f,
      actual: this.state.actual + 1
    });
  };

  render() {
    console.log(this.state.actual === 1);
    const vari =
      this.state.actual === 1
        ? { nombre: this.state.nombre }
        : { nombre: this.state.nombre, pagina: this.state.paginaActual };

    return (
      <Fragment>
        <div className="header">
          <div>
            <h1 className="text-Left title-style">
              <strong>Github Users</strong>
            </h1>
          </div>
          <div className="form-style">
            <form>
              <input
                type="search"
                placeholder="Search Github Users"
                onChange={e => {
                  this.setState({
                    ...this.state,
                    nombre: e.target.value,
                    tieneAnterior: false,
                    paginaActual: " ",
                    paginaAnterior: " ",
                    paginaSiguiente: " ",
                    actual: 1,
                    limite: 10
                  });
                }}
              />
            </form>
          </div>
        </div>
        <div>
          <Query query={BUSCAR_USUARIOS_QUERY} variables={vari}>
            {({ loading, error, data }) => {
              if (loading) return "Cargando...";
              if (error)
                return (
                  <p className="alert alert-danger p-3 text-center">
                    {" "}
                    {`Error: ${error.message}`}{" "}
                  </p>
                );
              if (data.search.edges.length !== 0 || this.state.nombre === " ")
                return (
                  <div>
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
                    <Paginador
                      tieneAnterior={data.search.pageInfo.hasPreviousPage}
                      tieneSiguiente={data.search.pageInfo.hasNextPage}
                      limite={this.state.limite}
                      paginaAnterior={this.paginaAnterior(
                        this.state.paginaActual,
                        data.search.pageInfo.startCursor
                      )}
                      paginaSiguiente={this.paginaSiguiente(
                        data.search.pageInfo.startCursor,
                        data.search.pageInfo.endCursor
                      )}
                    />
                  </div>
                );
              else
                return (
                  <div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <span className="name">No Results</span>
                      </li>
                    </ul>
                  </div>
                );
            }}
          </Query>
        </div>
      </Fragment>
    );
  }
}
