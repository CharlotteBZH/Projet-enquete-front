import { createStore } from "redux";
import rootReducer from "./reducer";
import playMiddleware from './middlewares/playMiddleware';
import nextMiddleware from './middlewares/nextMiddleware';

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