import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { jobsApi } from './api/jobsApi';
import formReducer from './slices/formSlice';
import favoritesReducer from './slices/favoritesSlice';

const rootReducer = combineReducers({
  form: formReducer,
  favorites: favoritesReducer,
  [jobsApi.reducerPath]: jobsApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
