import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import TransactionStatus from './TransactionStatus';

export default {
  title: 'interac-etransfer/status/transaction-status/TransactionsStatus',
  component: TransactionStatus,
} as ComponentMeta<typeof TransactionStatus>;

const Template: ComponentStory<typeof TransactionStatus> = () => (
  <BrowserRouter>
    <TransactionStatus />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
