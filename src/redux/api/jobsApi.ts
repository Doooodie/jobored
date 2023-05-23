import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { JobsData, JobsResponse } from 'types/JobsData';
import { FormSliceState } from 'types/JobsParams';
import FavoritesParams from 'types/FavoritesParams';

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
    getFavorites: builder.query<JobsResponse, FavoritesParams>({
      query: ({ page, ids }) => {
        const serializedIds = ids.map((id) => `ids[]=${id}`).join('&');
        const idsRequest = serializedIds && `?${serializedIds}`;

        return {
          url: `vacancies/${idsRequest}`,
          params: {
            published: 1,
            count: 4,
            page,
          },
        };
      },
    }),
    getJobDetails: builder.query<JobsData, string>({
      query: (id) => `vacancies/${id}/`,
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetCataloguesQuery,
  useGetFavoritesQuery,
  useGetJobDetailsQuery,
} = jobsApi;
