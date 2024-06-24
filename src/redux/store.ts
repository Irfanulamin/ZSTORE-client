import { configureStore } from "@reduxjs/toolkit";
import { registerApi } from "./feature/registerApi";
import cartSlice from "./feature/cartSlice";
import { orderApi } from "./feature/orderPostApi";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [orderApi.reducerPath]: orderApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registerApi.middleware, orderApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
