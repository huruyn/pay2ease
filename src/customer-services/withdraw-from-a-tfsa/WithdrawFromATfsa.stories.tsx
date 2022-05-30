import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import WithdrawFromATfsa from './WithdrawFromATfsa';

export default {
  title: 'customer-services/withdraw-from-a-tfsa/WithdrawFromATfsa',
  component: WithdrawFromATfsa,
} as ComponentMeta<typeof WithdrawFromATfsa>;

const Template: ComponentStory<typeof WithdrawFromATfsa> = () => (
  <WithdrawFromATfsa />
);

export const Default = Template.bind({});
Default.args = {};
