import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#111827',
  white: '#fefefe',
  primary: {
    main: '#00A7E2',
    '100': '#B8ECFF',
    '200': '#8AE0FF',
    '300': '#5CD4FF',
    '400': '#2EC8FF',
    '500': '#00BCFF',
    '600': '#0097CC',
    '700': '#007199',
    '800': '#004B66',
    '900': '#002633',
  },
  secondary: {
    main: '#00293A',
    '100': '#D4E4E7',
    '200': '#A1C3CA',
    '300': '#6E9FAF',
    '400': '#3B7C92',
    '500': '#006A7A',
    '600': '#005460',
    '700': '#004147',
    '800': '#002E2E',
    '900': '#001A15',
  },
  navy: {
    main: '#002d55',
    '50': '#E5F3FF',
    '100': '#B8DDFF',
    '200': '#8AC8FF',
    '300': '#5CB2FF',
    '400': '#2E9DFF',
    '500': '#0087FF',
    '600': '#006CCC',
    '700': '#005199',
    '800': '#003666',
    '900': '#001B33',
  },
};

const fonts = {
  body: `"NanumSquareNeo-Variable", NanumSquareNeo-Variable, -apple-system,
  BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
  "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const shadows = {
  outline: '0 0 0 1px var(--chakra-colors-green-500)',
};

const theme = extendTheme({ colors, fonts, shadows });

export default theme;
