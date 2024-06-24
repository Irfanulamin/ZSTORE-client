import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerApi: any = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zstore-server.vercel.app/",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (registerData) => ({
        url: "api/v1/register",
        method: "POST",
        body: registerData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = registerApi;

export default registerApi.reducer;
