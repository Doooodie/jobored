import { useAppDispatch } from 'redux/hooks';
import { Paper, Group, Title, Stack, NumberInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { changeForm } from 'redux/slices/formSlice';
import { FormValues } from 'types/JobsParams';
import ResetButton from './ResetButton';
import CataloguesSelect from './CataloguesSelect';

function Filters() {
  const dispatch = useAppDispatch();
  const form = useForm<FormValues>({
    initialValues: {
      catalogues: 0,
      payment_from: '',
      payment_to: '',
    },
  });

  const submitHandler = form.onSubmit(({ catalogues, payment_from, payment_to }) => {
    dispatch(changeForm({ catalogues, payment_from, payment_to }));
  });

  return (
    <Paper component='aside' w={{ base: '100%', lg: 270, xl: 315 }} px='lg' py='md'>
      <form onSubmit={submitHandler}>
        <Group position='apart' mb={25}>
          <Title order={3} size={20}>
            Фильтры
          </Title>
          <ResetButton form={form} />
        </Group>

        <Stack spacing={18}>
          <CataloguesSelect form={form} />
          <Stack spacing={8}>
            <NumberInput
              label='Оклад'
              placeholder='От'
              data-elem='salary-from-input'
              {...form.getInputProps('payment_from')}
            />
            <NumberInput
              placeholder='До'
              data-elem='salary-to-input'
              {...form.getInputProps('payment_to')}
            />
          </Stack>
          <Button type='submit' h={40} data-elem='search-button'>
            Применить
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default Filters;
