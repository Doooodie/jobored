import { Stack, Center, Pagination, Container } from '@mantine/core';
import JobCard from 'components/JobCard';

function Favorites() {
  return (
    <Container size={806}>
      <Stack spacing={16} mb={104}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Stack>
      <Center>
        <Pagination total={3} />
      </Center>
    </Container>
  );
}

export default Favorites;
