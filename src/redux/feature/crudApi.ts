import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const crudApi = createApi({
  reducerPath: "crudApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
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
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `delete-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["crud"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = crudApi;

export default crudApi.reducer;
