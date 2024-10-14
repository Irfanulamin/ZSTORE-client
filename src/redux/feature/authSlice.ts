import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setUser: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    logOut: (state) => {
      state.email = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
