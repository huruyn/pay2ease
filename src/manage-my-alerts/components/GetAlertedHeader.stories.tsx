import { ComponentStory, ComponentMeta } from '@storybook/react';
import GetAlertedHeader from './GetAlertedHeader';

export default {
  title: 'manage-my-alerts/components/GetAlertedHeader',
  component: GetAlertedHeader,
} as ComponentMeta<typeof GetAlertedHeader>;

const Template: ComponentStory<typeof GetAlertedHeader> = () => (
  <GetAlertedHeader />
);

export const Default = Template.bind({});
Default.args = {};
