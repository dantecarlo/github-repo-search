import React, { Component, Fragment } from "react";

export default class Paginador extends Component {
  state = {
  };

  render() {
    const btnAnterior =
      this.props.tieneAnterior ? (
        <button type="button" className="btn" onClick={this.props.paginaAnterior}>
          &laquo;
        </button>
      ) : (
        <button type="button" className="btn" disabled>
          &laquo;
        </button>
      );


    const btnSiguiente =
      this.props.tieneSiguiente ? (
        <button type="button" className="btn" onClick={this.props.paginaSiguiente}>
          &raquo;
        </button>
      ) : (
        <button type="button" className="btn" disabled>
          &raquo;
        </button>
      );

    return (
      <Fragment>
        <div className="d-flex justify-content-center align-middle">
          {btnAnterior}
          {btnSiguiente}
        </div>
      </Fragment>
    );
  }
}
