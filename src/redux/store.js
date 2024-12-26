import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)


const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store);

export default store;