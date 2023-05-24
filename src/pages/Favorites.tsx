import { Stack, Center, Container } from '@mantine/core';
import { useAppSelector } from 'redux/hooks';
import { useGetFavoritesQuery } from 'redux/api/jobsApi';
import JobCard from 'components/JobCard/JobCard';
import Skeletons from 'components/Skeletons/Skeletons';
import JobsPagination from 'components/JobsPagination';
import NotFound from './NotFound';

function Favorites() {
  const favoritesData = useAppSelector((store) => store.favorites);
  const { data, isFetching } = useGetFavoritesQuery(
    { ...favoritesData },
    {
      skip: !favoritesData.ids.length,
    }
  );

  if (!favoritesData.ids.length) return <NotFound />;
  const cards = data?.objects.map((jobData) => {
    return <JobCard key={jobData.id} {...jobData} />;
  });

  return (
    <Container size={806}>
      <Stack spacing={16} mb={104}>
        {isFetching ? Skeletons : cards}
      </Stack>
      <Center>
        <JobsPagination isFavorites total={data ? data.total : 0} />
      </Center>
    </Container>
  );
}

export default Favorites;
