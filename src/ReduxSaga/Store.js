import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from "./Reducers/RootReducers";
import RootSaga from "./Saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = compose(
    applyMiddleware(sagaMiddleware),
)(createStore)(rootReducer);


sagaMiddleware.run(RootSaga);

export default store;