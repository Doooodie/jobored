import { Box, Center, Container, Flex, Pagination, Stack } from '@mantine/core';
import FilterForm from 'components/FilterForm';
import SearchBar from 'components/SearchBar';
import JobCards from 'components/JobCards';

function Vacancies() {
  return (
    <Container>
      <Flex gap={28} wrap='wrap' align='start' justify='center'>
        <FilterForm />
        <Box component='section' maw={{ base: '100%', lg: 773 }} sx={{ flexGrow: 1 }}>
          <Stack spacing={16} mb={40}>
            <SearchBar />
            <JobCards />
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
