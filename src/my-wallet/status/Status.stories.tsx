import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Status from './Status';

export default {
  title: 'my-wallet/status/Status',
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = () => (
  <BrowserRouter>
    <Status />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
