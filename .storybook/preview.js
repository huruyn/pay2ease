import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

window.API_URL = "https://mock.net";

export const decorators = [mswDecorator] 

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: ['Introduction'], 
      locales: '', 
    },
  },
}