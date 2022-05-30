import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../../i18n/config';
import '../../../styles/index.scss';
import Contacts from './Contacts';

export default {
  title: 'common/ContactInput',
  component: Contacts,
} as ComponentMeta<typeof Contacts>;

const Template: ComponentStory<typeof Contacts> = () => <Contacts />;

export const Default = Template.bind({});
Default.args = {};
