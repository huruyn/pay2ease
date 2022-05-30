import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SentPending from './SentPending';

export default {
  title: 'interac-etransfer/status/sent/completed/SentPending',
  component: SentPending,
} as ComponentMeta<typeof SentPending>;

const Template: ComponentStory<typeof SentPending> = () => (
  <BrowserRouter>
    <SentPending
      transaction={undefined}
      user={undefined}
      setCurrentStatus={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
