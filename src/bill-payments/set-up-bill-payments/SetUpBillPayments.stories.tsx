import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import SetUpBillPayments from './SetUpBillPayments';

export default {
  title: 'bill-payments/set-up-bill-payments/SetUpBillPayments',
  component: SetUpBillPayments,
} as ComponentMeta<typeof SetUpBillPayments>;

const Template: ComponentStory<typeof SetUpBillPayments> = () => (
  <SetUpBillPayments />
);

export const Default = Template.bind({});
Default.args = {};
