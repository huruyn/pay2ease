import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import InteracETransferDetails from './InteracETransferDetails';

export default {
  title: 'interac-etransfer/status/interac-e-transfer-details/InteracETransferDetails',
  component: InteracETransferDetails,
} as ComponentMeta<typeof InteracETransferDetails>;

const Template: ComponentStory<typeof InteracETransferDetails> = () => (
  <BrowserRouter>
    <InteracETransferDetails />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
