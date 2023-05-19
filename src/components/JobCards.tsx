import { useAppSelector } from 'redux/hooks';
import { useGetJobsQuery } from 'redux/api/jobsApi';
import JobCard from './JobCard';

function JobCards() {
  const formData = useAppSelector((store) => store.form);
  const { data } = useGetJobsQuery({ ...formData });

  const cards = data?.map((jobData) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <JobCard key={jobData.id} {...jobData} />;
  });

  return <>{cards}</>;
}

export default JobCards;
