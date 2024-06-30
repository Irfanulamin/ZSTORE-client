import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  email: null | string;
};

const initialState: TAuthState = {
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      console.log(state.email);
      state.email = action.payload;
    },
    logOut: (state) => {
      state.email = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
