import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: "orders",
        method: "GET",
      }),
      providesTags: ["orders"],
    }),

    createOrders: builder.mutation({
      query: (orderDetails) => ({
        url: "create-order",
        method: "POST",
        body: orderDetails,
      }),
      invalidatesTags: ["orders"],
    }),

    updateOrder: builder.mutation({
      query: ({ id }) => ({
        url: `orders/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useCreateOrdersMutation,
  useUpdateOrderMutation,
} = orderApi;

export default orderApi.reducer;
