import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FavoritesParams from 'types/FavoritesParams';

const initialState: FavoritesParams = {
  ids: [],
  page: 0,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      if (state.ids.includes(action.payload)) {
        const currentState = state;
        currentState.ids = state.ids.filter((favorite) => favorite !== action.payload);
      } else {
        state.ids.push(action.payload);
      }
    },
    toggleFavoritesPage(state, action: PayloadAction<number>) {
      const currentState = state;
      currentState.page = action.payload;
    },
  },
});

export const { toggleFavorite, toggleFavoritesPage } = favoritesSlice.actions;
export default favoritesSlice.reducer;
