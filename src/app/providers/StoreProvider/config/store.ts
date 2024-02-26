import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import {StateSchema} from "app/providers/StoreProvider";

const rootReducers = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
