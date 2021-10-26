import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loader: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserPending: (state, action) => {
      state.loader = true;
    },
    loginUserFulfilled: (state, action) => {
      state.user = action.payload;
      state.loader = false;
      state.error = null;
    },
    loginUserRejected: (state, action) => {
      state.error = action.payload;
      state.loader = false;
    },
    registerUserPending: (state, action) => {
      state.loader = true;
    },
    registerUserFulfilled: (state, action) => {
      state.user = action.payload;
      state.loader = false;
      state.error = null;
    },
    registerUserRejected: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    logoutUserPending: (state, action) => {
      state.loader = true;
    },
    logoutUserFulfilled: (state, action) => {
      state.user = {};
      state.loader = false;
      state.error = null;
    },
    logoutUserRejected: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    loginInitialPending: (state, action) => {
      state.loader = true
    },
    loginInitialFulfilled: (state, action) => {
      state.user = action.payload;
      state.loader = false;
      state.error = null;
    },
    loginInitialRejected: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    }
  },
});


export default userSlice.reducer;

export const { actions: userActions } = userSlice;
