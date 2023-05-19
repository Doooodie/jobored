import { Box, Center, Container, Flex, Pagination, Stack } from '@mantine/core';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { useGetJobsQuery } from 'redux/api/jobsApi';
import { changeForm } from 'redux/slices/formSlice';
import FilterForm from 'components/FilterForm';
import SearchBar from 'components/SearchBar';
import JobCard from 'components/JobCard';
import JobSkeleton from 'components/JobSkeleton';

const skeletons = Array(4).fill(<JobSkeleton />);

function Vacancies() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((store) => store.form);
  const { data, isFetching } = useGetJobsQuery({ ...formData });
  let totalPages = 0;

  const cards = data?.objects.map((jobData) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <JobCard key={jobData.id} {...jobData} />;
  });

  if (data) {
    totalPages = data.total > 500 ? 125 : Math.ceil(data.total / 4);
  }

  return (
    <Container>
      <Flex gap={28} wrap='wrap' align='start' justify='center'>
        <FilterForm />
        <Box component='section' maw={{ base: '100%', lg: 773 }} sx={{ flexGrow: 1 }}>
          <Stack spacing={16} mb={40}>
            <SearchBar />
            {isFetching ? skeletons : cards}
          </Stack>
          <Center>
            <Pagination
              total={totalPages}
              sx={{ justifyContent: 'center' }}
              onChange={(value) => dispatch(changeForm({ page: value - 1 }))}
            />
          </Center>
        </Box>
      </Flex>
    </Container>
  );
}

export default Vacancies;
