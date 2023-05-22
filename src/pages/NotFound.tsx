import { Link } from 'react-router-dom';
import { Button, Container, Image, Stack, Title } from '@mantine/core';
import { useAppDispatch } from 'redux/hooks';
import { changeForm } from 'redux/slices/formSlice';
import notFoundImage from 'assets/not-found.svg';

function NotFound() {
  const dispatch = useAppDispatch();

  return (
    <Container mt={80}>
      <Stack spacing={32} align='center'>
        <Image src={notFoundImage} width={240} alt='человек с лупой' />
        <Title order={2} size={24} c='#343A40' ta='center'>
          Упс, здесь еще ничего нет!
        </Title>
        <Button
          component={Link}
          to='/'
          onClick={() =>
            dispatch(
              changeForm({
                page: undefined,
                keyword: undefined,
                payment_from: undefined,
                payment_to: undefined,
                catalogues: undefined,
              })
            )
          }
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
