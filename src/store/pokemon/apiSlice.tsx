import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (build) => ({
        get15Data: build.mutation({
            query: () => ({
                url: '/pokemon?limit=15&offset=0',
                method: 'GET',
              }),
        })
    }),
  });


  export const {
    useGet15DataMutation,
  } = apiSlice;