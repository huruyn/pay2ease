import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import MyWalletDetails from './MyWalletDetails';

export default {
  title: 'my-wallet/status/my-wallet-details/MyWalletDetails',
  component: MyWalletDetails,
} as ComponentMeta<typeof MyWalletDetails>;

const Template: ComponentStory<typeof MyWalletDetails> = () => (
  <BrowserRouter>
    <MyWalletDetails />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
