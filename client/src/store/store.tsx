import {
    createStore as create_store,
    applyMiddleware as apply_middleware, compose
} from 'redux';
import { composeWithDevTools as compose_with_dev_tools } from 'redux-devtools-extension';
import { default as create_saga_middleware } from "redux-saga";
import root_reducer from './root_reducer';
import root_saga from './root_saga';

const saga_middleware = create_saga_middleware();

const initial_store = {};

const devTools = process.env.NODE_ENV === 'production' ?
    apply_middleware(saga_middleware) :
    compose_with_dev_tools(apply_middleware(saga_middleware));


const store = create_store(
    root_reducer, initial_store, devTools
);


saga_middleware.run(root_saga);

export default store;