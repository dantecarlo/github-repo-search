import React, { Component, Fragment } from "react";
import "./Repositorio.css";
import { REPOSITORIO_USUARIO } from "../queries";
import { Query } from "react-apollo";
import back from "../assets/backf.png";
import { Link } from "react-router-dom";

class Repositorios extends Component {
  state = {};
  render() {
    return (
      <Query query={REPOSITORIO_USUARIO} variables={{ nombre: this.props.match.params.nombre }}>
        {({ loading, error, data }) => {
          if (loading) return "Cargando...";
          if (error) return `Error: ${error.message}`;
          const repo = data.search.edges[0].node.repositories.edges;
          console.log(data.search.edges[0].node.repositories.edges);
          return (
            <Fragment>
              <div className="headerRepository">
                <div className="float-left">
                  <Link to="/">
                    <img
                      src={back}
                      className="backArrow rounded-circle"
                      alt="back"
                    />
                  </Link>
                </div>
                <div className="headerName">
                  <strong>name</strong>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                {repo.map(item => (
                  <li className="list-group-item">
                    <div className="float-left name">{item.node.name}</div>
                    <div className="float-right pr">PR Count: 0</div>
                    <br />
                    <br />
                    <div className="desciption">{item.node.description}</div>
                  </li>
                ))}
              </ul>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default Repositorios;
