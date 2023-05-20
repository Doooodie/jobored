type JobsParams = {
  page: number;
  keyword: string;
  payment_from: string;
  payment_to: string;
  catalogues: number;
};

type FormValues = Omit<JobsParams, 'page' | 'keyword'>;
type FormSliceState = Partial<JobsParams>;

export type { JobsParams, FormValues, FormSliceState };
