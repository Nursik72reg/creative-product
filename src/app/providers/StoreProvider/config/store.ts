import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            count: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
