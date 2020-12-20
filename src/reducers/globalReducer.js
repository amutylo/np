import {
  SET_MOBILE,
  SET_SEARCH,
  SET_TITLE,
  SET_CATEGORIES,
  SET_MENU_LINKS,
} from "./types";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case SET_MOBILE:
      const newState = {
        ...state,
        isMobile: action.payload,
      };
      return newState;
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_MENU_LINKS:
      return {
        ...state,
        menu_links: action.payload,
      };
    case SET_SEARCH:
    default:
      return state;
  }
};
