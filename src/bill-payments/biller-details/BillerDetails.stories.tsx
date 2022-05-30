import { ComponentStory, ComponentMeta } from '@storybook/react';
import BillerDetails from './BillerDetails';

export default {
  title: 'bill-payments/biller-details/BillerDetails',
  component: BillerDetails,
} as ComponentMeta<typeof BillerDetails>;

const Template: ComponentStory<typeof BillerDetails> = () => (
  <BillerDetails />
);

export const Default = Template.bind({});
Default.args = {};
