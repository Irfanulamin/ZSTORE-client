import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zstore-server.vercel.app/",
  }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: "reviews",
        method: "GET",
      }),
      providesTags: ["reviews"],
    }),

    createReviews: builder.mutation({
      query: (reviewDetails) => ({
        url: "create-review",
        method: "POST",
        body: reviewDetails,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, useCreateReviewsMutation } = reviewApi;

export default reviewApi.reducer;
