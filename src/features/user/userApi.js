import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "userSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: { email: string, password: string }) => {
        return {
          url: "/login",
          method: "post",
          body,
        };
      },
    }),
    // register: builder.query({
    //   query: (data) => `/register`,
    // }),
  }),
});

export const {
  useLoginMutation,
  useRegisterQuery,
  
} = userSlice;
