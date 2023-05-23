import { useParams } from 'react-router-dom';
import { Container, Paper, Stack } from '@mantine/core';
import { useGetJobDetailsQuery } from 'redux/api/jobsApi';
import JobCard from 'components/JobCard';
import DetailsSkeleton from 'components/DetailsSkeleton';
import NotFound from './NotFound';

function VacancyDetails() {
  const { jobId } = useParams();
  const { data, isFetching, isError } = useGetJobDetailsQuery(`${jobId}`);

  if (isError) return <NotFound />;

  return (
    <Container size={806}>
      <Stack spacing={20}>
        {isFetching ? (
          <DetailsSkeleton />
        ) : (
          <>
            {data && <JobCard isDetails {...data} />}
            <Paper
              px='xl'
              py='lg'
              dangerouslySetInnerHTML={{ __html: data ? data?.vacancyRichText : '' }}
            />
          </>
        )}
      </Stack>
    </Container>
  );
}

export default VacancyDetails;
