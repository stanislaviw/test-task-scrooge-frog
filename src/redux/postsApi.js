import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ page, limit }) => ({
        url: `posts?_page=${page}&_limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
