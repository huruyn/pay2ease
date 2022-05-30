import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import { Provider } from 'react-redux';
import EditMyProfile from './EditMyProfile';
import { store } from '../../app/store';

export default {
  title: 'interac-etransfer/edit-my-profile/EditMyProfile',
  component: EditMyProfile,
} as ComponentMeta<typeof EditMyProfile>;

const Template: ComponentStory<typeof EditMyProfile> = () => (
  <Provider store={store}>
    <EditMyProfile />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  user: {
    email: 'john.doe@email.com',
    firstName: 'John',
    lastName: 'Doe',
  },
};
