import { LOG_IN } from "../types/auth";

export const setLogin = (isAuthenticated) => async (dispatch) => {
  dispatch({ type: LOG_IN, payload: isAuthenticated });
};
