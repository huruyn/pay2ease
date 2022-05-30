import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../../i18n/config';
import '../../../styles/index.scss';
import AddContact from './AddContact';

export default {
  title: 'common/AddContact',
  component: AddContact,
} as ComponentMeta<typeof AddContact>;

const Template: ComponentStory<typeof AddContact> = () => <AddContact />;

export const Default = Template.bind({});
Default.args = {};
