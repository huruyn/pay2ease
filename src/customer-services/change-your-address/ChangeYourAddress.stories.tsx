import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../../i18n/config';
import '../../styles/index.scss';
import ChangeYourAddress from './ChangeYourAddress';

export default {
  title: 'customer-services/change-your-address/ChangeYourAddress',
  component: ChangeYourAddress,
} as ComponentMeta<typeof ChangeYourAddress>;

const Template: ComponentStory<typeof ChangeYourAddress> = () => (
  <BrowserRouter>
    <ChangeYourAddress />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
