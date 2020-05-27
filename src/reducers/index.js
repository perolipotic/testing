import { combineReducers } from "redux";
import commentsReducers from "./comments";

export const rootReducers = combineReducers({
  comments: commentsReducers,
});

