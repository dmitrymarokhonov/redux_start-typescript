import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";


const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});

// Middleware
const logger = (store: any) => {
  return (next: any) => {
    return (action: any) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    }
  }
}


const composeEnhancers =  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const app: JSX.Element = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();