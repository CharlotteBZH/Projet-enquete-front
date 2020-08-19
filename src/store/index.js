import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import ajaxMiddleware from './middlewares/ajaxMiddleware';
import authMiddleware from './middlewares/authMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    ajaxMiddleware,
    authMiddleware
  )
);

const store = createStore(
  rootReducer,
  enhancers
);

export default store;
