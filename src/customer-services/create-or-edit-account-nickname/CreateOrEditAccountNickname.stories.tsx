import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import CreateOrEditAccountNickname from './CreateOrEditAccountNickname';

export default {
  title: 'customer-services/create-or-edit-account-nickname/CreateOrEditAccountNickname',
  component: CreateOrEditAccountNickname,
} as ComponentMeta<typeof CreateOrEditAccountNickname>;

const Template: ComponentStory<typeof CreateOrEditAccountNickname> = () => (
  <CreateOrEditAccountNickname />
);

export const Default = Template.bind({});
Default.args = {};
