import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './i18n/config';
import './styles/index.scss';
import Legal from './Legal';

export default {
  title: 'Legal',
  component: Legal,
} as ComponentMeta<typeof Legal>;

const Template: ComponentStory<typeof Legal> = () => (
  <BrowserRouter>
    <Legal />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
