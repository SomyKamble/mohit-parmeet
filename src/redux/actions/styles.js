import { NOTIFICATION, THEME } from "../types/styles";

export const toggleTheme = (darkMode) => async (dispatch) => {
  dispatch({ type: THEME, payload: darkMode });
};

export const setNotification = (notification) => async (dispatch) => {
  dispatch({ type: NOTIFICATION, payload: notification });
};
