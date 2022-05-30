import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import HomeLoggedIn from './HomeLoggedIn';

export default {
  title: 'HomeLoggedIn',
  component: HomeLoggedIn,
} as ComponentMeta<typeof HomeLoggedIn>;

const Template: ComponentStory<typeof HomeLoggedIn> = () => (
  <BrowserRouter>
    <HomeLoggedIn />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
