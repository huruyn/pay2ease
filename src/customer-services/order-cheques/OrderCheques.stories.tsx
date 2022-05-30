import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import OrderCheques from './OrderCheques';

export default {
  title: 'customer-services/order-cheques/OrderCheques',
  component: OrderCheques,
} as ComponentMeta<typeof OrderCheques>;

const Template: ComponentStory<typeof OrderCheques> = () => <OrderCheques />;

export const Default = Template.bind({});
Default.args = {};
