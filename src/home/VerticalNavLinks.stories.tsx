import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import VerticalNavLinks from './VerticalNavLinks';

export default {
  title: 'VerticalNavLinks',
  component: VerticalNavLinks,
} as ComponentMeta<typeof VerticalNavLinks>;

const Template: ComponentStory<typeof VerticalNavLinks> = () => (
  <BrowserRouter>
    <VerticalNavLinks />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
