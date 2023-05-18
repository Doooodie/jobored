import { Select, useMantineTheme } from '@mantine/core';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { useDisclosure } from '@mantine/hooks';

function IndustrySelect() {
  const theme = useMantineTheme();
  const [opened, handlers] = useDisclosure();

  return (
    <Select
      allowDeselect
      data={['React', 'Angular', 'Svelte', 'Vue']}
      label='Отрасль'
      placeholder='Выберете отрасль'
      rightSection={
        <ArrowIcon
          width={24}
          height={24}
          style={{
            transition: 'transform 150ms ease',
            transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
            stroke: opened ? `${theme.colors.blue[4]}` : `${theme.colors.gray[4]}`,
          }}
        />
      }
      maxDropdownHeight={188}
      onDropdownOpen={handlers.open}
      onDropdownClose={handlers.close}
    />
  );
}

export default IndustrySelect;
