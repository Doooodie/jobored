import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type JobsData from 'types/JobsData';

type JobsParams = {
  page: number;
  keyword: string;
  payment_from: number;
  payment_to: number;
  catalogues: number;
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
    getJobs: builder.query<JobsData[], Partial<JobsParams>>({
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
      transformResponse: (response: { objects: JobsData[] }) => response.objects,
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;
