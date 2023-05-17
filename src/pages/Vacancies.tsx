import { Box, Container, Flex } from '@mantine/core';
import FilterForm from 'components/FilterForm';
import SearchBar from 'components/SearchBar';

function Vacancies() {
  return (
    <Container>
      <Flex gap={28} wrap='wrap' justify='center'>
        <FilterForm />
        <Box component='section' w={773}>
          <SearchBar />
        </Box>
      </Flex>
    </Container>
  );
}

export default Vacancies;
