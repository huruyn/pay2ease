import { ComponentStory, ComponentMeta } from '@storybook/react';
import ViewEBills from './ViewEBills';

export default {
  title: 'bill-payments/set-up-bill-payments/ViewEBills',
  component: ViewEBills,
} as ComponentMeta<typeof ViewEBills>;

const Template: ComponentStory<typeof ViewEBills> = () => (
  <ViewEBills />
);

export const Default = Template.bind({});
Default.args = {};
