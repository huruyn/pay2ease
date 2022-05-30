import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import ApplyForPaymentProtectorInsuranceForCreditCards from './ApplyForPaymentProtectorInsuranceForCreditCards';

export default {
  title: 'customer-services/apply-for-payment-protector-insurance-for-credit-cards/ApplyForPaymentProtectorInsuranceForCreditCards',
  component: ApplyForPaymentProtectorInsuranceForCreditCards,
} as ComponentMeta<typeof ApplyForPaymentProtectorInsuranceForCreditCards>;

const Template: ComponentStory<typeof ApplyForPaymentProtectorInsuranceForCreditCards> = () => (
  <ApplyForPaymentProtectorInsuranceForCreditCards />
);

export const Default = Template.bind({});
Default.args = {};
