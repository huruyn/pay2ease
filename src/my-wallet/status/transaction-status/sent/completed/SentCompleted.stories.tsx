import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SentCompleted from './SentCompleted';

export default {
  title: 'my-wallet/status/sent/completed/SentCompleted',
  component: SentCompleted,
} as ComponentMeta<typeof SentCompleted>;

const Template: ComponentStory<typeof SentCompleted> = () => (
  <BrowserRouter>
    <SentCompleted
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
