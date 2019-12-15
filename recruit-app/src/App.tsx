import React from "react";

import { Header } from "./components/Header/Header";
import { GlobalStateProvider } from "./GlobalState";

import "./App.scss";

const App: React.FC = () => {
  // TODO call service to retrieve userinfo
  return (
    <GlobalStateProvider>
      <div className="App">
        <Header />
      </div>
    </GlobalStateProvider>
  );
};

export default App;
