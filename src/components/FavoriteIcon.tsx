import { ActionIcon } from '@mantine/core';
import { ReactComponent as StarIcon } from 'assets/icons/star.svg';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { toggleFavorite } from 'redux/slices/favoritesSlice';
import { JobsData } from 'types/JobsData';

function FavoriteIcon({ id }: Pick<JobsData, 'id'>) {
  const dispatch = useAppDispatch();
  const { ids } = useAppSelector((store) => store.favorites);
  const isFavorite = ids.includes(id);

  return (
    <ActionIcon
      title='Добавить в избранное'
      data-elem={`vacancy-${id}-shortlist-button`}
      variant='transparent'
      onClick={() => dispatch(toggleFavorite(id))}
      sx={(theme) => ({
        '& svg': {
          fill: isFavorite ? theme.colors.blue[4] : 'none',
          stroke: isFavorite ? theme.colors.blue[4] : theme.colors.gray[4],
        },
        '&:hover svg': {
          stroke: theme.colors.blue[4],
        },
        '&:active svg': {
          fill: theme.colors.blue[4],
        },
      })}
    >
      <StarIcon />
    </ActionIcon>
  );
}

export default FavoriteIcon;
