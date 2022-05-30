import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import HomeLoggedOut from './HomeLoggedOut';

export default {
  title: 'HomeLoggedOut',
  component: HomeLoggedOut,
} as ComponentMeta<typeof HomeLoggedOut>;

const Template: ComponentStory<typeof HomeLoggedOut> = () => (
  <BrowserRouter>
    <HomeLoggedOut />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
