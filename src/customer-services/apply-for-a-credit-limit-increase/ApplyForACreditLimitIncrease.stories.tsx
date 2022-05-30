import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import ApplyForACreditLimitIncrease from './ApplyForACreditLimitIncrease';

export default {
  title: 'customer-services/apply-for-a-credit-limit-increase/ApplyForACreditLimitIncrease',
  component: ApplyForACreditLimitIncrease,
} as ComponentMeta<typeof ApplyForACreditLimitIncrease>;

const Template: ComponentStory<typeof ApplyForACreditLimitIncrease> = () => (
  <ApplyForACreditLimitIncrease />
);

export const Default = Template.bind({});
Default.args = {};
