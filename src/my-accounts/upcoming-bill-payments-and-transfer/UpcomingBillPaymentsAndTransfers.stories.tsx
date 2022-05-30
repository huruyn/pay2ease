import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import UpcomingBillPaymentsAndTransfers from './UpcomingBillPaymentsAndTransfers';

export default {
  title: 'my-accounts/upcoming-bill-payments-and-transfer/UpcomingBillPaymentsAndTransfers',
  component: UpcomingBillPaymentsAndTransfers,
} as ComponentMeta<typeof UpcomingBillPaymentsAndTransfers>;

const Template: ComponentStory<
  typeof UpcomingBillPaymentsAndTransfers
> = () => <UpcomingBillPaymentsAndTransfers />;

export const Default = Template.bind({});
Default.args = {};
