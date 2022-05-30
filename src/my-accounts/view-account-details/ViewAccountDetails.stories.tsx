import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import ViewAccountDetails from './ViewAccountDetails';

export default {
  title: 'my-accounts/view-account-details/ViewAccountDetails',
  component: ViewAccountDetails,
} as ComponentMeta<typeof ViewAccountDetails>;

const Template: ComponentStory<typeof ViewAccountDetails> = () => <ViewAccountDetails />;

export const Default = Template.bind({});
Default.args = {};
