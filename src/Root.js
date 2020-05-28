import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';
import { rootReducers } from "reducers";

import async from "middlewares/async"
import stateValidator from "middlewares/stateValidator"

export default ({ children, initialState = {} }) => {
  const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );
  return <Provider store={store}>{children}</Provider>;
};
