import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import SetUpDirectDepositWithCanadaRevenueAgency from './SetUpDirectDepositWithCanadaRevenueAgency';

export default {
  title: 'customer-services/set-up-direct-deposit-with-canada-revenue-agency/SetUpDirectDepositWithCanadaRevenueAgency',
  component: SetUpDirectDepositWithCanadaRevenueAgency,
} as ComponentMeta<typeof SetUpDirectDepositWithCanadaRevenueAgency>;

const Template: ComponentStory<typeof SetUpDirectDepositWithCanadaRevenueAgency> = () => (
  <SetUpDirectDepositWithCanadaRevenueAgency />
);

export const Default = Template.bind({});
Default.args = {};
