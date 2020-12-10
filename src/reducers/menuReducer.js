export const menuReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MENU":
      return {
        items: [...state.items, ...action.payload],
      };
    case "INIT":
    default:
      return state;
  }
};
