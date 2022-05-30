import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ReceivedCompleted from './ReceivedCompleted';

export default {
  title: 'interac-etransfer/status/received/ReceivedCompleted',
  component: ReceivedCompleted,
} as ComponentMeta<typeof ReceivedCompleted>;

const Template: ComponentStory<typeof ReceivedCompleted> = () => (
  <BrowserRouter>
    <ReceivedCompleted
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
