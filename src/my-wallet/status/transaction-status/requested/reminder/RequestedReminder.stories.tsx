import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestedReminder from './RequestedReminder';

export default {
  title: 'my-wallet/status/requested/reminder/RequestedReminder',
  component: RequestedReminder,
} as ComponentMeta<typeof RequestedReminder>;

const Template: ComponentStory<typeof RequestedReminder> = () => (
  <BrowserRouter>
    <RequestedReminder
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
