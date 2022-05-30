import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestedCancelled from './RequestedCancelled';

export default {
  title: 'my-wallet/status/completed/RequestedCompleted',
  component: RequestedCancelled,
} as ComponentMeta<typeof RequestedCancelled>;

const Template: ComponentStory<typeof RequestedCancelled> = () => (
  <BrowserRouter>
    <RequestedCancelled
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
