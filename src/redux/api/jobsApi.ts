import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'redux/store';
import { JobsData, JobsResponse } from 'types/JobsData';
import { FormSliceState } from 'types/JobsParams';
import FavoritesParams from 'types/FavoritesParams';
import AuthData from 'types/AuthData';

type CataloguesResponse = {
  title: string;
  key: number;
};

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.superjob.ru/2.0`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.access_token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      headers.set('x-secret-key', import.meta.env.VITE_X_SECRET_KEY);
      headers.set('X-Api-App-Id', import.meta.env.VITE_AUTH_CLIENT_SECRET);

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
          no_agreement: payment_from || payment_to ? 1 : 0,
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
    getAuth: builder.query<AuthData, unknown>({
      query: () => {
        return {
          url: 'oauth2/password/',
          params: {
            login: import.meta.env.VITE_AUTH_LOGIN,
            password: import.meta.env.VITE_AUTH_PASSWORD,
            client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
            client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
            hr: 0,
          },
        };
      },
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetCataloguesQuery,
  useGetFavoritesQuery,
  useGetJobDetailsQuery,
  useGetAuthQuery,
} = jobsApi;
