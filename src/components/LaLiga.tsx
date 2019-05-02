// ESTE ES EL PROVIDER, DONDE SE GUARDAN LOS DATOS

import React, { Component } from "react";

export interface IEquipo {
  nombre: string;
  titulos: number;
}
export interface IState {
  equipos: IEquipo[];
}

interface IContextFunctions {
  esCampeon: (id: string) => void;
}

const initialState: IState = {
  equipos: [
    {
      nombre: "Real Madrid",
      titulos: 35
    },
    {
      nombre: "Barcelona",
      titulos: 25
    },
    {
      nombre: "Atlético de Madrid",
      titulos: 10
    }
  ]
};

type TContext = IState & Partial<IContextFunctions>;

export const LaLigaContext = React.createContext<TContext>(initialState);

export class LaLigaProvider extends Component<{}, IState> {
  state: IState = initialState;

  esCampeon = (id: string) => {
    let eq = [...this.state.equipos];
    eq[Number(id)].titulos += 1;
    this.setState({
      equipos: eq
    });
  };

  render() {
    return (
      <LaLigaContext.Provider
        value={{
          equipos: this.state.equipos,
          esCampeon: this.esCampeon
        }}
      >
        {this.props.children}
      </LaLigaContext.Provider>
    );
  }
}

export default LaLigaProvider;
