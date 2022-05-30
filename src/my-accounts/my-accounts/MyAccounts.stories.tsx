import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import MyAccounts from './MyAccounts';

export default {
  title: 'my-accounts/MyAccounts',
  component: MyAccounts,
} as ComponentMeta<typeof MyAccounts>;

const Template: ComponentStory<typeof MyAccounts> = () => (
  <BrowserRouter>
    <MyAccounts />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
