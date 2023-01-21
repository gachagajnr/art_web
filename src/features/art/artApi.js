import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const artSlice = createApi({
  reducerPath: "artSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
  }),
  tagTypes: ["Arts"],
  endpoints: (builder) => ({
    getArts: builder.query({
      query: () => "/arts",
    }),
    getArt: builder.query({
      query: (id) => `/arts/${id}`,
    }),
    saveArt: builder.query({
      query: (id) => `/arts`,
    }),
    updateArt: builder.query({
      query: (id) => `/arts/${id}`,
    }),
    deleteArt: builder.query({
      query: (id) => `/arts/${id}`,
    }),
  }),
});

export const {
  useGetArtsQuery,
  useGetArtQuery,
  useSaveArtQuery,
  useUpdateArtQuery,
  useDeleteArtQuery,
} = artSlice;
