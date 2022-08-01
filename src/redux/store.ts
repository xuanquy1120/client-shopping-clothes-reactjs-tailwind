import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/services/authSlice';
import cartReducer from 'features/Cart/services/cartSlice';
import productReducer from 'features/Product/services/productSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   blacklist: ['token'],
// };

const rootReducer = combineReducers({
  // auth: persistReducer(authPersistConfig, authReducer),
  auth: authReducer,
  cart: cartReducer,
  products: productReducer
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getMiddleware) => getMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;