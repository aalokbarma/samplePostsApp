import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import {SagaData} from "./saga";

const sagaMiddleware = createSagaMiddleware();

// Here we are storing all data to catch it from anywhere throughout the app
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware],
});
//  the following line will allow this store to interact with other elements outside of this file asynchronously.
sagaMiddleware.run(SagaData);
export default store;