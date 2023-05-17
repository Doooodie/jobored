import { Paper, Group, Title, Stack, Select, NumberInput, Button } from '@mantine/core';
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import ResetButton from './ResetButton';

function FilterForm() {
  return (
    <Paper component='aside' w={315} px='lg' py='md'>
      <Group position='apart' mb={25}>
        <Title order={3} size={20}>
          Фильтры
        </Title>
        <ResetButton />
      </Group>

      <Stack spacing={18}>
        <Select
          allowDeselect
          data={['React', 'Angular', 'Svelte', 'Vue']}
          label='Отрасль'
          placeholder='Выберете отрасль'
          rightSection={<DownIcon width={24} height={24} />}
        />

        <Stack spacing={8}>
          <NumberInput label='Оклад' placeholder='От' />
          <NumberInput placeholder='До' />
        </Stack>

        <Button h={40}>Применить</Button>
      </Stack>
    </Paper>
  );
}

export default FilterForm;
