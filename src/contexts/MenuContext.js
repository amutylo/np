import React, { createContext, useReducer } from "react";

import { menuReducer } from "../reducers/menuReducer";

export const MenuContext = createContext();

const MenuContextProvider = () => {
  const [items, dispatch] = useReducer(menuReducer, [], () => {});
  return (
    <MenuContext.Provider value={{ items, dispatch }}>
      {PaymentResponse.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
