import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  emailVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.emailVerified = action.payload.emailVerified;
    },
    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
      state.emailVerified = false;
    },
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
