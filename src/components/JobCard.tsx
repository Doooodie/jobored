import { Link } from 'react-router-dom';
import { ActionIcon, Anchor, Group, Paper, Stack, Title, Text } from '@mantine/core';
import { ReactComponent as StarIcon } from 'assets/icons/star.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';

function JobCard() {
  return (
    <Paper component='article' px='xl' py='lg'>
      <Stack spacing={9}>
        <Group position='apart' noWrap>
          <Anchor component={Link} to='/'>
            <Title order={3} size={20} weight={600} color='blue'>
              Менеджер-дизайнер
            </Title>
          </Anchor>
          <ActionIcon
            title='Добавить в избранное'
            variant='transparent'
            sx={(theme) => ({
              '& svg': {
                fill: 'none',
                stroke: theme.colors.gray[4],
              },
              '&:hover svg': {
                stroke: theme.colors.blue[4],
              },
              '&:active svg': {
                fill: theme.colors.blue[4],
              },
            })}
          >
            <StarIcon />
          </ActionIcon>
        </Group>
        <Group spacing='sm'>
          <Text fw={600}>з/п от 70000 rub</Text>
          <Text c='gray.5'>•</Text>
          <Text>Полный рабочий день</Text>
        </Group>
        <Group spacing={8}>
          <LocationIcon width={20} height={20} />
          <Text>Новый Уренгой</Text>
        </Group>
      </Stack>
    </Paper>
  );
}

export default JobCard;
