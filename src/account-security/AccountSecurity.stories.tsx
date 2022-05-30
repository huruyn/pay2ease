import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import AccountSecurity from './AccountSecurity';

export default {
  title: 'account-security/AccountSecurity',
  component: AccountSecurity,
} as ComponentMeta<typeof AccountSecurity>;

const Template: ComponentStory<typeof AccountSecurity> = () => (
  <BrowserRouter>
    <AccountSecurity />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
