import { SET_MOBILE, SET_SEARCH, SET_TITLE } from "./types";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case SET_MOBILE:
      const mob = action.payload ? "Yes" : "No";
      console.log("Set isMobile", mob);
      const newState = {
        ...state,
        isMobile: action.payload,
      };
      return newState;
    case SET_TITLE:
      console.log("set title:", action.payload);
      return {
        ...state,
        title: action.payload,
      };
    case SET_SEARCH:
    default:
      return state;
  }
};
