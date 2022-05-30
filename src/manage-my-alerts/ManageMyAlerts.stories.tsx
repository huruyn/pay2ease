import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../i18n/config';
import '../styles/index.scss';
import ManageMyAlerts from './ManageMyAlerts';

export default {
  title: 'manage-my-alerts/ManageMyAlerts',
  component: ManageMyAlerts,
} as ComponentMeta<typeof ManageMyAlerts>;

const Template: ComponentStory<typeof ManageMyAlerts> = () => <ManageMyAlerts />;

export const Default = Template.bind({});
Default.args = {};
