import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createFilter from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import { jobsApi } from './api/jobsApi';
import formReducer from './slices/formSlice';
import favoritesReducer from './slices/favoritesSlice';

const rootReducer = combineReducers({
  form: formReducer,
  favorites: favoritesReducer,
  [jobsApi.reducerPath]: jobsApi.reducer,
});

const saveSubsetFilter = createFilter('favorites', ['ids']);
const persistedReducer = persistReducer(
  { key: 'root', storage, whitelist: ['favorites'], transforms: [saveSubsetFilter] },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(jobsApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
