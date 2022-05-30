import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import MakeAPaymentWithPoints from './MakeAPaymentWithPoints';

export default {
  title: 'customer-services/make-a-payment-with-points/MakeAPaymentWithPoints',
  component: MakeAPaymentWithPoints,
} as ComponentMeta<typeof MakeAPaymentWithPoints>;

const Template: ComponentStory<typeof MakeAPaymentWithPoints> = () => <MakeAPaymentWithPoints />;

export const Default = Template.bind({});
Default.args = {};
