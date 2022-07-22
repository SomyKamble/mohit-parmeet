import { combineReducers } from "redux";
import authReducer from "./auth";
import stylesReducer from "./styles";

const rootReducer = combineReducers({
  styles: stylesReducer,
  auth: authReducer,
});

export default rootReducer;
