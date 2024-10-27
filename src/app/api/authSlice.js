import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    emailVerified: false,
    accessToken: null,
    user: null,
  },
  reducers: {
    login(state, action) {
      const { user, accessToken } = action.payload;
      state.isAuthenticated = true;
      state.emailVerified = user.emailVerified;
      state.accessToken = accessToken;
      state.user = user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.emailVerified = false;
      state.accessToken = null;
      state.user = null;
    },
    // Additional reducers as needed
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
