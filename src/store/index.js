import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import nextMiddleware from './middlewares/nextMiddlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        nextMiddleware
    )
);

const store = createStore(
    rootReducer,
    enhancers
);

export default store;
