import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, token: null };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, signOut } = appSlice.actions;
export default appSlice.reducer;