import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../i18n/config';
import '../../styles/index.scss';
import ViewEStatements from './ViewEStatements';

export default {
  title: 'my-accounts/view-estatements/ViewEstatements',
  component: ViewEStatements,
} as ComponentMeta<typeof ViewEStatements>;

const Template: ComponentStory<typeof ViewEStatements> = () => <ViewEStatements />;

export const Default = Template.bind({});
Default.args = {};
