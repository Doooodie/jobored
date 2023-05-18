import { Paper, Group, Title, Stack, NumberInput, Button } from '@mantine/core';
import ResetButton from './ResetButton';
import IndustrySelect from './IndustrySelect';

function FilterForm() {
  return (
    <Paper component='aside' w={{ base: '100%', sm: 270, lg: 315 }} px='lg' py='md'>
      <Group position='apart' mb={25}>
        <Title order={3} size={20}>
          Фильтры
        </Title>
        <ResetButton />
      </Group>

      <Stack spacing={18}>
        <IndustrySelect />
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
