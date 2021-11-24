import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(
  // @ts-ignore
  store
);

export default store;
