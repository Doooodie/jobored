import { Button, Container, Image, Stack, Title } from '@mantine/core';
import notFoundImage from 'assets/not-found.svg';

function NotFound() {
  return (
    <Container mt={80}>
      <Stack spacing={32} align='center'>
        <Image src={notFoundImage} width={240} alt='человек с лупой' />
        <Title order={2} size={24} c='#343A40' ta='center'>
          Упс, здесь еще ничего нет!
        </Title>
        <Button
          w={164}
          h={42}
          c='blue.5'
          bg='blue.0'
          sx={{
            '&:hover, &:active': { color: 'white' },
          }}
        >
          Поиск Вакансий
        </Button>
      </Stack>
    </Container>
  );
}

export default NotFound;
