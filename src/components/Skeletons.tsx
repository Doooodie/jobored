import { Group, Paper, Skeleton, Stack } from '@mantine/core';

function JobSkeleton() {
  return (
    <Paper px='xl' py='lg'>
      <Stack spacing={9}>
        <Group position='apart' noWrap>
          <Skeleton width='40%' height={28} radius='xl' />
          <Skeleton height={24} circle />
        </Group>
        <Skeleton width='60%' height={25} radius='xl' />
        <Group noWrap>
          <Skeleton height={24} circle />
          <Skeleton width='20%' height={25} radius='xl' />
        </Group>
      </Stack>
    </Paper>
  );
}

const Skeletons = Array.from({ length: 4 }, (_, i) => <JobSkeleton key={i} />);

export default Skeletons;
