import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesSliceState = {
  idArray: number[];
};

const initialState: FavoritesSliceState = {
  idArray: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      if (state.idArray.includes(action.payload)) {
        const currentState = state;
        currentState.idArray = state.idArray.filter((favorite) => favorite !== action.payload);
      } else {
        state.idArray.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
