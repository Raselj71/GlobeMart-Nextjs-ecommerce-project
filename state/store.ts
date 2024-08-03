import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReuder from '../state/features/cart/cartSlice'
import {  persistReducer,persistStore } from 'redux-persist'

import MenuSlice from './features/Menu/MenuSlice'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import {
 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const createNoopStorage = () => {
   return {
      getItem(_key: any) {
         return Promise.resolve(null);
      },
      setItem(_key: any, value: any) {
         return Promise.resolve(value);
      },
      removeItem(_key: any) {
         return Promise.resolve();
      },
   };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();


const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer=combineReducers({
        cart:cartReuder,
        menu:MenuSlice
    },)
 
// const persistedReducer = persistReducer(persistConfig, rootReducer)
const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  })

export const makeStore = () => {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    return makeConfiguredStore()
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    let store: any = configureStore({
      reducer: persistedReducer,
        middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    })
    store.__persistor = persistStore(store)
    return store
  }
}


export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']