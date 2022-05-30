import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ReceivedPending from './ReceivedPending';

export default {
  title: 'my-wallet/status/received/ReceivedPending',
  component: ReceivedPending,
} as ComponentMeta<typeof ReceivedPending>;

const Template: ComponentStory<typeof ReceivedPending> = () => (
  <BrowserRouter>
    <ReceivedPending
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
