import { configureStore } from "@reduxjs/toolkit";
import { registerApi } from "./feature/registerApi";
import cartSlice from "./feature/cartSlice";
import { orderApi } from "./feature/orderPostApi";
import { loginApi } from "./feature/loginApi";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./feature/authSlice";
import { reviewApi } from "./feature/reviewApi";

const persistConifg = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConifg, authSlice);

export const store: any = configureStore({
  reducer: {
    cart: cartSlice,
    [orderApi.reducerPath]: orderApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      registerApi.middleware,
      orderApi.middleware,
      loginApi.middleware,
      reviewApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
