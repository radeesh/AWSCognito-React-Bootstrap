import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(
    reducers,
    applyMiddleware(logger, thunk)
)
// store.subscribe(() => {
//   console.log(store.getState());
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
