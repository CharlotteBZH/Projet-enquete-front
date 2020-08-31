import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import playMiddleware from './middlewares/playMiddleware';
import nextMiddleware from './middlewares/nextMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    playMiddleware,
    nextMiddleware,
  )
);

const store = createStore(
  rootReducer,
  enhancers
);

export default store;