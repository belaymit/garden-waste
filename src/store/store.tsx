import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import skipReducer from './slices/storeSkipsSlices'

const persistConfig = {
    key: "root",
    storage,
    transforms: [
        encryptTransform({
            secretKey: "tenx-jobs",
            onError: (error) => {
                console.error('Encryption error:', error);
            },
        }),
    ],
    blacklist: ['skips']
};

const appReducer = combineReducers({
    skips: skipReducer,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'RESET') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: import.meta.env.MODE !== "production",
});

export const persistor = persistStore(store);

export const resetStore = () => {
    store.dispatch({ type: 'RESET' });
    persistor.purge(); 
};

if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        resetStore();
    });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;