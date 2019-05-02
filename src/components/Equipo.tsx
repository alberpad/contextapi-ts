import React, { Component } from "react";

import { LaLigaContext } from "./LaLiga";

export class Equipo extends Component {
  render() {
    return (
      <LaLigaContext.Consumer>
        {value => {
          return Object.keys(value.equipos).map(idEquipo => {
            return (
              <li
                key={idEquipo}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <p className="m-0">
                  {value.equipos[Number(idEquipo)].nombre}
                  <span className="badge badge-danger ml-4">
                    {value.equipos[Number(idEquipo)].titulos}
                  </span>
                </p>
                <button
                  onClick={() => {
                    if (value.esCampeon) value.esCampeon(idEquipo);
                  }}
                  className="btn btn-success"
                  type="button"
                >
                  Es Campeón
                </button>
              </li>
            );
          });
        }}
      </LaLigaContext.Consumer>
    );
  }
}

export default Equipo;
