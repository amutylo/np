import React, { createContext, useReducer } from "react";

export const CategoryContext = createContext();

const initialState = {
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return state;
    case "FETCH":
      return {
        items: [...state.items, ...action.payload],
      };
    default:
      return state;
  }
};

const CategoryContextProvider = (props) => {
  const [items, dispatch] = useReducer(reducer, initialState);

  return (
    <CategoryContext.Provider value={[items, dispatch]}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
