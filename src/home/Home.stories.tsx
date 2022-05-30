import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import Home from './Home';

export default {
  title: 'Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
