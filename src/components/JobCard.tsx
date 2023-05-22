import { Link } from 'react-router-dom';
import { Anchor, Group, Paper, Stack, Title, Text } from '@mantine/core';
import { JobsData } from 'types/JobsData';
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';
import PaymentText from './PaymentText';
import FavoriteIcon from './FavoriteIcon';

function JobCard({
  id,
  profession,
  town,
  type_of_work,
  payment_from,
  payment_to,
  currency,
}: JobsData) {
  return (
    <Paper component='article' px='xl' py='lg' data-elem={`vacancy-${id}`}>
      <Stack spacing={9}>
        <Group position='apart' noWrap>
          <Anchor component={Link} to='/'>
            <Title order={3} size={20} weight={600} color='blue'>
              {profession}
            </Title>
          </Anchor>
          <FavoriteIcon id={id} />
        </Group>
        <Group spacing='sm'>
          <Text fw={600}>
            з/п <PaymentText payment_from={payment_from} payment_to={payment_to} /> {currency}
          </Text>
          <Text c='gray.5'>•</Text>
          <Text>{type_of_work.title}</Text>
        </Group>
        <Group spacing={8}>
          <LocationIcon width={20} height={20} />
          <Text>{town.title}</Text>
        </Group>
      </Stack>
    </Paper>
  );
}

export default JobCard;
