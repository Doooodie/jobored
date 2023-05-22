import { JobsParams } from './JobsParams';

type FavoritesParams = {
  ids: number[];
  page: JobsParams['page'];
};

export default FavoritesParams;
