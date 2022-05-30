import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../i18n/config';
import '../../styles/index.scss';
import ChangeYourPassword from './ChangeYourPassword';

export default {
  title: 'customer-services/change-your-password/ChangeYourPassword',
  component: ChangeYourPassword,
} as ComponentMeta<typeof ChangeYourPassword>;

const Template: ComponentStory<typeof ChangeYourPassword> = () => (
  <BrowserRouter>
    <ChangeYourPassword />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
