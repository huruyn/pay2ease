import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import CreateAClickToPayAccount from './CreateAClickToPayAccount';

export default {
  title: 'customer-services/create-a-click-to-pay-account/CreateAClickToPayAccount',
  component: CreateAClickToPayAccount,
} as ComponentMeta<typeof CreateAClickToPayAccount>;

const Template: ComponentStory<typeof CreateAClickToPayAccount> = () => (
  <CreateAClickToPayAccount />
);

export const Default = Template.bind({});
Default.args = {};
