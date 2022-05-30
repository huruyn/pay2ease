import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ReceivedCancelled from './ReceivedCancelled';

export default {
  title: 'my-wallet/status/received/ReceivedCancelled',
  component: ReceivedCancelled,
} as ComponentMeta<typeof ReceivedCancelled>;

const Template: ComponentStory<typeof ReceivedCancelled> = () => (
  <BrowserRouter>
    <ReceivedCancelled
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
