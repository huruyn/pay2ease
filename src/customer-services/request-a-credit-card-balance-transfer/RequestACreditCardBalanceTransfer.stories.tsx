import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import RequestACreditCardBalanceTransfer from './RequestACreditCardBalanceTransfer';

export default {
  title: 'customer-services/request-a-credit-card-balance-transfer/RequestACreditCardBalanceTransfer',
  component: RequestACreditCardBalanceTransfer,
} as ComponentMeta<typeof RequestACreditCardBalanceTransfer>;

const Template: ComponentStory<typeof RequestACreditCardBalanceTransfer> = () => (
  <RequestACreditCardBalanceTransfer />
);

export const Default = Template.bind({});
Default.args = {};
