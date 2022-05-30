import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import ReviewAndCancelBillPayments from './ReviewAndCancelBillPayments';

export default {
  title: 'bill-payments/review-and-cancel-bill-payments/ReviewAndCancelBillPayments',
  component: ReviewAndCancelBillPayments,
} as ComponentMeta<typeof ReviewAndCancelBillPayments>;

const Template: ComponentStory<typeof ReviewAndCancelBillPayments> = () => (
  <ReviewAndCancelBillPayments />
);

export const Default = Template.bind({});
Default.args = {};
