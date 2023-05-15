import { MantineThemeOverride } from '@mantine/core';

const FONT = 'Inter, sans-serif';

const customTheme: MantineThemeOverride = {
  fontFamily: FONT,
  headings: {
    fontFamily: FONT,
  },
  colors: {
    gray: ['#FFFFFF', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88', '#232134'],
    blue: ['#DEECFF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC', '#5E96FC'],
  },
  primaryColor: 'blue',
  primaryShade: 4,
  black: '#232134',
};

export default customTheme;
