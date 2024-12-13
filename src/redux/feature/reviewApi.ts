import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
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
