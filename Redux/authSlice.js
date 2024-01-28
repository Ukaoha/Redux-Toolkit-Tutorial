'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  displayName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      state.isLoggedIn = true;
      state.displayName = action.payload.displayName;
    },

    REMOVE_ACTIVE_USER: (state, action) => {
      state.isLoggedIn = false;
      state.displayName = null;
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export default authSlice.reducer;
