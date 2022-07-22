import { LOG_IN } from "../types/auth";

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOG_IN:
      return { ...state, isAuthenticated: payload };
    default:
      return state;
  }
};

export default authReducer;
