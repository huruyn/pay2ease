import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import PayAndFileBusinessTaxes from './PayAndFileBusinessTaxes';

export default {
  title: 'customer-services/pay-and-file-business-taxes/PayAndFileBusinessTaxes',
  component: PayAndFileBusinessTaxes,
} as ComponentMeta<typeof PayAndFileBusinessTaxes>;

const Template: ComponentStory<typeof PayAndFileBusinessTaxes> = () => (
  <PayAndFileBusinessTaxes />
);

export const Default = Template.bind({});
Default.args = {};
