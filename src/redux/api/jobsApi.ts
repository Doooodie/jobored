import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { JobsResponse } from 'types/JobsData';
import { FormSliceState } from 'types/JobsParams';

type CataloguesResponse = {
  title: string;
  key: number;
};

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://startup-summer-2023-proxy.onrender.com/2.0`,
    prepareHeaders: (headers) => {
      headers.set('x-secret-key', import.meta.env.VITE_X_SECRET_KEY);
      headers.set('X-Api-App-Id', import.meta.env.VITE_X_API_APP_ID);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getJobs: builder.query<JobsResponse, FormSliceState>({
      query: ({ page = 0, keyword, payment_from, payment_to, catalogues }) => ({
        url: 'vacancies/',
        params: {
          published: 1,
          count: 4,
          page,
          keyword,
          payment_from,
          payment_to,
          catalogues,
        },
      }),
    }),
    getCatalogues: builder.query<CataloguesResponse[], void>({
      query: () => ({ url: 'catalogues/' }),
    }),
  }),
});

export const { useGetJobsQuery, useGetCataloguesQuery } = jobsApi;
