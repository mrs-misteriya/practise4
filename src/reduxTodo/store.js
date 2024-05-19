import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import filerReducer from './filterSlice'
import todoReducer from './todoSlice'

const persistConfig = {
  key: 'savedTodo',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    filter: filerReducer,
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

