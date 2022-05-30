import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../i18n/config';
import '../../styles/index.scss';
import CustomerServices from './CustomerServices';

export default {
  title: 'customer-services/CustomerServices',
  component: CustomerServices,
} as ComponentMeta<typeof CustomerServices>;

const Template: ComponentStory<typeof CustomerServices> = () => (
  <BrowserRouter>
    <CustomerServices />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
