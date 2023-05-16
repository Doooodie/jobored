import { Box, Button, Container, Flex, Paper, TextInput } from '@mantine/core';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

function Vacancies() {
  return (
    <Container size={1148}>
      <Flex gap={28} wrap='wrap' justify='center'>
        <Paper component='aside' w={315} h={360} radius={12}>
          Фильтры
        </Paper>
        <Box component='section' w={773}>
          <TextInput
            aria-label='Поиск'
            radius='md'
            icon={<SearchIcon />}
            placeholder='Введите название вакансии'
            rightSection={
              <Button radius='md' h={32}>
                Поиск
              </Button>
            }
            rightSectionWidth={107}
            styles={{ input: { height: '3rem' } }}
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default Vacancies;
