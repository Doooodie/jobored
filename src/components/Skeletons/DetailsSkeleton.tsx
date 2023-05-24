import { Group, Paper, Skeleton, Stack } from '@mantine/core';
import JobSkeleton from './JobSkeleton';

const details = Array.from({ length: 4 }, (_, i) => (
  <Group key={i} noWrap align='center'>
    <Skeleton height={8} circle />
    <Skeleton height={16} width='50%' radius='xl' />
  </Group>
));

function DetailsSkeleton() {
  return (
    <>
      <JobSkeleton />
      <Paper px='xl' py='lg'>
        <Skeleton height={30} width='30%' mb='xl' radius='xl' />
        <Stack spacing='xl'>{details}</Stack>
      </Paper>
    </>
  );
}

export default DetailsSkeleton;
