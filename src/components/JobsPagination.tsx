import { Pagination } from '@mantine/core';
import { useAppDispatch } from 'redux/hooks';
import { toggleFavoritesPage } from 'redux/slices/favoritesSlice';
import { changeForm } from 'redux/slices/formSlice';

type JobsPaginationProps = {
  total: number;
  isFavorites?: boolean;
};

function JobsPagination({ total, isFavorites = false }: JobsPaginationProps) {
  const dispatch = useAppDispatch();
  const totalPages = total >= 500 ? 125 : Math.ceil(total / 4);

  const changeHandler = (value: number) => {
    if (isFavorites) {
      dispatch(toggleFavoritesPage(value - 1));
    } else {
      dispatch(changeForm({ page: value - 1 }));
    }
  };

  return <Pagination total={totalPages} onChange={changeHandler} />;
}

export default JobsPagination;
