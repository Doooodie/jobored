import { Box, Center, Container, Flex, Stack } from '@mantine/core';
import { useAppSelector } from 'redux/hooks';
import { useGetJobsQuery } from 'redux/api/jobsApi';
import Filters from 'components/Filters';
import SearchBar from 'components/SearchBar';
import JobCard from 'components/JobCard';
import Skeletons from 'components/Skeletons';
import JobsPagination from 'components/JobsPagination';
import NotFound from './NotFound';

function Vacancies() {
  const formData = useAppSelector((store) => store.form);
  const { data, isFetching, isSuccess } = useGetJobsQuery({ ...formData });

  if (isSuccess && !data?.total) return <NotFound />;
  const cards = data?.objects.map((jobData) => {
    return <JobCard key={jobData.id} {...jobData} />;
  });

  return (
    <Container>
      <Flex gap={28} wrap='wrap' align='start' justify='center'>
        <Filters />
        <Box component='section' maw={{ base: '100%', lg: 773 }} sx={{ flexGrow: 1 }}>
          <Stack spacing={16} mb={40}>
            <SearchBar />
            {isFetching ? Skeletons : cards}
          </Stack>
          <Center>
            <JobsPagination total={data ? data.total : 0} />
          </Center>
        </Box>
      </Flex>
    </Container>
  );
}

export default Vacancies;
