import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import MortgagePrepayment from './MortgagePrepayment';

export default {
  title: 'customer-services/mortgage-prepayment/MortgagePrepayment',
  component: MortgagePrepayment,
} as ComponentMeta<typeof MortgagePrepayment>;

const Template: ComponentStory<typeof MortgagePrepayment> = () => <MortgagePrepayment />;

export const Default = Template.bind({});
Default.args = {};
