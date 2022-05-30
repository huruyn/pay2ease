import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import ContactInput from './ContactInput';

export default {
  title: 'common/ContactInput',
  component: ContactInput,
} as ComponentMeta<typeof ContactInput>;

const Template: ComponentStory<typeof ContactInput> = () => <ContactInput />;

export const Default = Template.bind({});
Default.args = {};
