import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import StopPayments from './StopPayments';

export default {
  title: 'customer-services/stop-payments/StopPayments',
  component: StopPayments,
} as ComponentMeta<typeof StopPayments>;

const Template: ComponentStory<typeof StopPayments> = () => (
  <StopPayments />
);

export const Default = Template.bind({});
Default.args = {};
