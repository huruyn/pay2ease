import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import ApplyForOrChangeOverdraftProtectionService from './ApplyForOrChangeOverdraftProtectionService';

export default {
  title: 'customer-services/apply-for-or-change-overdraft-protection-service/ApplyForOrChangeOverdraftProtectionService',
  component: ApplyForOrChangeOverdraftProtectionService,
} as ComponentMeta<typeof ApplyForOrChangeOverdraftProtectionService>;

const Template: ComponentStory<typeof ApplyForOrChangeOverdraftProtectionService> = () => (
  <ApplyForOrChangeOverdraftProtectionService />
);

export const Default = Template.bind({});
Default.args = {};
