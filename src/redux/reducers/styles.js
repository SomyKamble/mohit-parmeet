import { NOTIFICATION, THEME } from "../types/styles";

const initialState = {
  darkMode: false,
  notification: {
    active: "unset",
    loading: true,
    error: false,
    message: "",
  },
};

const stylesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case THEME:
      return { ...state, darkMode: payload };
    case NOTIFICATION:
      return { ...state, notification: payload };
    default:
      return state;
  }
};

export default stylesReducer;
