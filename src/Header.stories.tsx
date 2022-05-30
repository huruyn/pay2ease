import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderPure } from './Header';
import './i18n/config';
import './styles/index.scss';

export default {
  title: 'Header',
  component: HeaderPure,
} as ComponentMeta<typeof HeaderPure>;

const Template: ComponentStory<typeof HeaderPure> = ({
  userFullName,
  isAuthenticated,
  isInProgress: canLogin,
  handleLogin,
  handleLogout,
}) => (
  <BrowserRouter>
    <HeaderPure
      isAuthenticated={isAuthenticated}
      isInProgress={canLogin}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      userFullName={userFullName}
    />
  </BrowserRouter>
);

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const LoggingIn = Template.bind({});
LoggingIn.args = {
  isInProgress: true,
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isAuthenticated: true,
};
