import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChangeMortgagePaymentDetails from './ChangeMortgagePaymentDetails';

export default {
  title: 'customer-services/change-mortgage-payment-details/ChangeMortgagePaymentDetails',
  component: ChangeMortgagePaymentDetails,
} as ComponentMeta<typeof ChangeMortgagePaymentDetails>;

const Template: ComponentStory<typeof ChangeMortgagePaymentDetails> = () => (
  <ChangeMortgagePaymentDetails />
);

export const Default = Template.bind({});
Default.args = {};
