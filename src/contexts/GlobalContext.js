import React, { createContext, useReducer } from "react";
import { globalReducer } from "../reducers/globalReducer";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
