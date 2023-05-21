import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cart from './slices/cart'
import user from './slices/userInfo'
import checkout from './slices/checkout'
import global from './slices/global'
import dashbourd from './slices/dashbourd'
import favorites from './slices/favorites'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'checkout', 'global', 'dashbourd', 'favorites', 'cart'], // only persist data for user and checkout and global and dashbourd and favorites
}

const rootReducer = combineReducers({
  user,
  cart,
  checkout,
  global,
  dashbourd,
  favorites,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
