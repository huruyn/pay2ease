import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import EbillsEmailNotification from './EbillsEmailNotification';

export default {
  title: 'customer-services/ebills-email-notification/EbillsEmailNotification',
  component: EbillsEmailNotification,
} as ComponentMeta<typeof EbillsEmailNotification>;

const Template: ComponentStory<typeof EbillsEmailNotification> = () => (
  <EbillsEmailNotification />
);

export const Default = Template.bind({});
Default.args = {};
