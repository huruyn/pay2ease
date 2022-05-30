import { ComponentStory, ComponentMeta } from '@storybook/react';
import Reminders from './Reminders';

export default {
  title: 'manage-my-alerts/tabs/Reminders',
  component: Reminders,
} as ComponentMeta<typeof Reminders>;

const Template: ComponentStory<typeof Reminders> = () => <Reminders />;

export const Default = Template.bind({});
Default.args = {};
