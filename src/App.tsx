import React from "react";

import Equipos from "./components/Equipos";
import LaLigaProvider from "./components/LaLiga";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <LaLigaProvider>
          <Equipos />
        </LaLigaProvider>
      </div>
    );
  }
}

export default App;
