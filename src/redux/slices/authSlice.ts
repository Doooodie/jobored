import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthData from 'types/AuthData';

const initialState: AuthData = {
  access_token: '',
  ttl: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthData>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
