import { Select, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { UseFormReturnType } from '@mantine/form';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { useGetCataloguesQuery } from 'redux/api/jobsApi';
import { FormValues } from 'types/JobsParams';

type ModifiedCatalogues = {
  label: string;
  value: string;
};

function CataloguesSelect({ form }: { form: UseFormReturnType<FormValues> }) {
  const theme = useMantineTheme();
  const [opened, handlers] = useDisclosure();
  const { data } = useGetCataloguesQuery();
  let modifiedCatalogues: ModifiedCatalogues[] = [];

  if (data) {
    modifiedCatalogues = data.map((catalogue) => ({
      value: `${catalogue.key}`,
      label: catalogue.title,
    }));
  }

  return (
    <Select
      allowDeselect
      label='Отрасль'
      placeholder='Выберете отрасль'
      data-elem='industry-select'
      nothingFound='Ничего не найдено'
      data={modifiedCatalogues}
      maxDropdownHeight={188}
      onDropdownOpen={handlers.open}
      onDropdownClose={handlers.close}
      {...form.getInputProps('catalogues')}
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
      styles={{
        item: {
          whiteSpace: 'initial',
        },
      }}
    />
  );
}

export default CataloguesSelect;
