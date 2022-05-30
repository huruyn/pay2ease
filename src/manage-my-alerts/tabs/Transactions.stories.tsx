import { ComponentStory, ComponentMeta } from '@storybook/react';
import Transactions from './Transactions';

export default {
  title: 'manage-my-alerts/tabs/Transactions',
  component: Transactions,
} as ComponentMeta<typeof Transactions>;

const Template: ComponentStory<typeof Transactions> = () => <Transactions />;

export const Default = Template.bind({});
Default.args = {};
