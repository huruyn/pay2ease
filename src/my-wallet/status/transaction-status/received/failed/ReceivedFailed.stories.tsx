import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ReceivedFailed from './ReceivedFailed';

export default {
  title: 'my-wallet/status/received/ReceivedFailed',
  component: ReceivedFailed,
} as ComponentMeta<typeof ReceivedFailed>;

const Template: ComponentStory<typeof ReceivedFailed> = () => (
  <BrowserRouter>
    <ReceivedFailed
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
