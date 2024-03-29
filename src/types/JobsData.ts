type JobsData = {
  id: number;
  profession: string;
  town: { title: string };
  type_of_work: { title: string };
  payment_to: number;
  payment_from: number;
  currency: string;
  vacancyRichText: string;
};

type JobsResponse = {
  objects: JobsData[];
  total: number;
};

export type { JobsResponse, JobsData };
