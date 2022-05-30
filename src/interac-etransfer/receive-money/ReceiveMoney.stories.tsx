import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ReceiveMoney from './ReceiveMoney';

export default {
  title: 'interac-etransfer/receive-money/ReceiveMoney',
  component: ReceiveMoney,
} as ComponentMeta<typeof ReceiveMoney>;

const Template: ComponentStory<typeof ReceiveMoney> = () => (
  <BrowserRouter>
    <ReceiveMoney />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
