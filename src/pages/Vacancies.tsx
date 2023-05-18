import { Box, Center, Container, Flex, Pagination, Stack } from '@mantine/core';
import FilterForm from 'components/FilterForm';
import JobCard from 'components/JobCard';
import SearchBar from 'components/SearchBar';

function Vacancies() {
  return (
    <Container>
      <Flex gap={28} wrap='wrap' align='start' justify='center'>
        <FilterForm />
        <Box component='section' sx={{ flexGrow: 1 }}>
          <Stack spacing={16} mb={40}>
            <SearchBar />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </Stack>
          <Center>
            <Pagination total={3} />
          </Center>
        </Box>
      </Flex>
    </Container>
  );
}

export default Vacancies;
