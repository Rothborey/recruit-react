import React, { useReducer, createContext, useContext } from "react";
import { User } from "./models/User";

const defaultGlobalState: State = {
  user: {
    firstName: "Rothborey"
  },
  pageName: "Home"
};

export interface State {
  user: User;
  pageName: string;
}

export interface Action {
  payload: Partial<State>;
}

interface InitContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const GlobalStateContext = createContext({} as InitContextProps);

const globalStateReducer = (state: State, action: Action) => {
  return {
    ...state,
    ...action.payload
  };
};

interface Props {
  children: React.ReactElement<any> | React.ReactElement<any>[];
}

export const GlobalStateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(globalStateReducer, defaultGlobalState);
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
