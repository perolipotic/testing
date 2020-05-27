import { combineReducers } from "redux";
import commentsReducers from "./comments";
import  authReducer from "./auth";

export const rootReducers = combineReducers({
  comments: commentsReducers,
  auth:authReducer
});

