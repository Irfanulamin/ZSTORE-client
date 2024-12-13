import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zstore-server.vercel.app/",
  }),
  tagTypes: ["auth", "user"], // Specify the tag types
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "api/v1/login",
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["auth"], // Invalidate the auth tag
    }),
    getInfoByEmail: builder.query({
      query: (email) => ({
        url: `api/v1/users/email/${email}`,
        method: "GET",
      }),
      providesTags: (result, error, email) => [{ type: "user", id: email }], // Provide tags for user info
    }),
    updateUser: builder.mutation({
      query: ({ email, name, photo }) => ({
        url: `api/v1/users/email/${email}`,
        method: "PUT",
        body: {
          name,
          photo,
        },
      }),
      invalidatesTags: (result, error, { email }) => [
        { type: "user", id: email },
      ], // Invalidate user tags properly
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetInfoByEmailQuery,
  useUpdateUserMutation,
} = loginApi;

export default loginApi.reducer;
