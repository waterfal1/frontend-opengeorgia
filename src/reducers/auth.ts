import { createSlice } from '@reduxjs/toolkit';

export interface IAuth {
  token: string | null,
  userId: string | null,
  role: string | null
}
const initialState: IAuth = {
  token: null,
  userId: null,
  role: null,
};

export const usersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => ({
      token: action.payload.token,
      userId: action.payload.userId,
      role: action.payload.role,
    }),
    logout: () => ({
      token: null,
      userId: null,
      role: null,
    }),
  },
});

export const { login, logout } = usersSlice.actions;

export default usersSlice.reducer;
