import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RequestedPending from './RequestedPending';

export default {
  title: 'my-wallet/status/request/pending/RequestPending',
  component: RequestedPending,
} as ComponentMeta<typeof RequestedPending>;

const Template: ComponentStory<typeof RequestedPending> = () => (
  <BrowserRouter>
    <RequestedPending
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
