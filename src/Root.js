import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';
import { rootReducers } from "reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(promiseMiddleware)
  );
  return <Provider store={store}>{children}</Provider>;
};
