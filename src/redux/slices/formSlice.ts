import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormSliceState } from 'types/JobsParams';

const initialState: FormSliceState = {
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
    changeForm(state, action: PayloadAction<FormSliceState>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { changeForm } = formSlice.actions;
export default formSlice.reducer;
