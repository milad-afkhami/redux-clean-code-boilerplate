import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { APP_HYDRATION } from "@redux";
import { rootSaga } from "./sagas";
import { reducers } from "./reducers";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools({ trace: true })(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const rootReducer = (state, action) =>
  action.type === HYDRATE
    ? { ...state, ...action.payload }
    : combineReducers(reducers)(state, action);

const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  if (process.browser) store.dispatch({ type: APP_HYDRATION });
  return store;
};

const nextReduxWrapper = createWrapper(makeStore, { debug: true });

export { makeStore, nextReduxWrapper };
