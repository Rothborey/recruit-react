import React from "react";

import { Header } from "./components/Header/Header";
import { GlobalStateProvider } from "./GlobalState";
import { RegisterCreditCardForm } from "./modules/RegisterCreditCardForm/RegisterCreditCardForm";

import "./App.scss";

const App: React.FC = () => {
  // TODO call service to retrieve userinfo
  return (
    <GlobalStateProvider>
      <div className="App">
        <Header />
        {/* TODO - add routing */}
        <div className="page-content">
          <RegisterCreditCardForm />
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default App;
