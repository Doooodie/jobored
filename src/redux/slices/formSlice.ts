import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormSliceState = {
  page: number;
  keyword: string;
  payment_from: number;
  payment_to: number;
  catalogues: number;
};

const initialState: Partial<FormSliceState> = {
  page: undefined,
  keyword: undefined,
  payment_from: undefined,
  payment_to: undefined,
  catalogues: undefined,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeForm(state, action: PayloadAction<Partial<FormSliceState>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { changeForm } = formSlice.actions;
export default formSlice.reducer;
