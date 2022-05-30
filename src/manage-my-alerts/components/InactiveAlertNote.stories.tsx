import { ComponentStory, ComponentMeta } from '@storybook/react';
import InactiveAlertNote from './InactiveAlertNote';

export default {
  title: 'manage-my-alerts/components/InactiveAlertNote',
  component: InactiveAlertNote,
} as ComponentMeta<typeof InactiveAlertNote>;

const Template: ComponentStory<typeof InactiveAlertNote> = () => (
  <InactiveAlertNote />
);

export const Default = Template.bind({});
Default.args = {};
