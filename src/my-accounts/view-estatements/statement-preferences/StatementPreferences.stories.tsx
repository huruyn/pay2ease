import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StatementPreferences from './StatementPreferences';

export default {
  title: 'my-accounts/view-estatements/statement-preferences/StatementPreferences',
  component: StatementPreferences,
} as ComponentMeta<typeof StatementPreferences>;

const Template: ComponentStory<typeof StatementPreferences> = () => (
  <BrowserRouter>
    <StatementPreferences />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
