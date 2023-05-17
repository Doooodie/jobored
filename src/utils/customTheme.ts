import { MantineThemeOverride } from '@mantine/core';

import {
  ContainerDefaultProps,
  PaperDefaultProps,
  ButtonDefaultProps,
  SelectDefaultProps,
  InputDefaultProps,
  TextInputDefaultProps,
  NumberInputDefaultProps,
} from './defaultProps';

const FONT = 'Inter, sans-serif';

const customTheme: MantineThemeOverride = {
  fontFamily: FONT,
  headings: {
    fontFamily: FONT,
  },

  colors: {
    gray: ['#FFFFFF', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88'],
    blue: ['#DEECFF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC', '#3B7CD3'],
  },
  primaryColor: 'blue',
  primaryShade: 4,
  black: '#232134',

  components: {
    Container: { defaultProps: ContainerDefaultProps },
    Paper: {
      defaultProps: PaperDefaultProps,
      styles: (theme) => ({
        root: {
          border: `1px solid ${theme.colors.gray[2]}`,
        },
      }),
    },
    Anchor: {
      styles: (theme) => ({
        root: {
          '&:hover': {
            textDecoration: 'none',
          },
          '&:active': {
            color: theme.colors.blue[4],
          },
        },
      }),
    },
    Button: {
      defaultProps: ButtonDefaultProps,
      styles: (theme) => ({
        root: {
          '&:hover': {
            backgroundColor: theme.colors.blue[3],
          },
          '&:active': {
            backgroundColor: theme.colors.blue[5],
          },
        },
      }),
    },
    Select: {
      defaultProps: SelectDefaultProps,
      styles: (theme) => ({
        rightSection: { pointerEvents: 'none' },
        item: {
          '&[data-hovered]:not(&[data-selected])': { backgroundColor: theme.colors.blue[0] },
        },
      }),
    },
    InputWrapper: {
      styles: {
        label: {
          fontSize: 16,
          fontWeight: 700,
          marginBottom: 5,
        },
      },
    },
    Input: {
      defaultProps: InputDefaultProps,
      styles: (theme) => ({
        input: {
          height: 42,
          borderColor: theme.colors.gray[3],
          '&::placeholder': {
            color: theme.colors.gray[4],
          },
          '&:hover, &:focus-within': {
            borderColor: theme.colors.blue[4],
          },
        },
      }),
    },
    TextInput: {
      defaultProps: TextInputDefaultProps,
      styles: { input: { height: 48 } },
    },
    NumberInput: {
      defaultProps: NumberInputDefaultProps,
      styles: {
        control: {
          border: 0,
        },
        rightSection: {
          justifyContent: 'center',
          height: 'initial',
        },
      },
    },
  },
};

export default customTheme;
