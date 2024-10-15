import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const crudApi = createApi({
  reducerPath: "crudApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zstore-server.vercel.app/",
  }),
  tagTypes: ["crud"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: "men-clothing",
        method: "GET",
      }),
      providesTags: ["crud"],
    }),
    createProduct: builder.mutation({
      query: (productDetails) => ({
        url: "create-product",
        method: "POST",
        body: productDetails,
      }),
      invalidatesTags: ["crud"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, updateProduct }) => ({
        url: `update-product/${id}`,
        method: "PUT",
        body: updateProduct,
      }),
      invalidatesTags: ["crud"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
} = crudApi;

export default crudApi.reducer;
