import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 

export const artSlice = createApi({
  reducerPath: "artSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = artSlice;
