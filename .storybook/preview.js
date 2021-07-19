import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global"
import theme from "styles/theme"
import '../.jest/next-image.mock'

export const parameters = {
  backgrounds: {
    default: 'zapt-light',
    values: [
      {
        name: 'zapt-light',
        value: theme.colors.white ,
      },
      {
        name: 'zapt-dark',
        value: theme.colors.black,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  ),
];
