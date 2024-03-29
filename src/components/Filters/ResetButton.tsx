import { Text, Group, UnstyledButton } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { FormValues } from 'types/JobsParams';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

function ResetButton({ form }: { form: UseFormReturnType<FormValues> }) {
  return (
    <UnstyledButton
      onClick={() => form.reset()}
      sx={(theme) => ({
        '& span, & svg': {
          color: theme.colors.gray[4],
          stroke: theme.colors.gray[4],
        },
        '&:hover span, &:hover svg': {
          color: theme.colors.blue[3],
          stroke: theme.colors.blue[3],
        },
        '&:active span, &:active svg': {
          color: theme.colors.blue[4],
          stroke: theme.colors.blue[4],
        },
      })}
    >
      <Group spacing={5} noWrap>
        <Text component='span' size='sm'>
          Сбросить все
        </Text>
        <CloseIcon />
      </Group>
    </UnstyledButton>
  );
}

export default ResetButton;
