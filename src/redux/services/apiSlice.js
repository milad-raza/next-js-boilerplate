import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/c/94d0-d9e7-40f0-9d60",
    }),
    addPost: builder.mutation({
      query: (postData) => ({
        url: "/c/eb3d-d728-4cdf-ab19",
        method: "POST",
        body: postData,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = apiSlice;
