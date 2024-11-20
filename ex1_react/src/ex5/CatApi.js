import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'live_x9msivLWLpfxJh9GkiAZTL2vdRn3opXEffSjRY2kCGdNRHXjmkkAekdCx6NrcO9B';

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchCats: builder.query({
      query: (page) => `images/search?limit=5&page=${page}`,
    }),
  }),
});

export const { useFetchCatsQuery } = catApi;