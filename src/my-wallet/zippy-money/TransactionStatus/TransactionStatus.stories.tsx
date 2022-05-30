import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import TransactionStatus from './TransactionStatus';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';

export default {
  title: 'my-wallet/zippy-money/TransactionStatus',
  component: TransactionStatus,
} as ComponentMeta<typeof TransactionStatus>;

const Template: ComponentStory<typeof TransactionStatus> = () => (
  <BrowserRouter>
    <TransactionStatus
      transactionType={TransactionTypeEnum.SEND}
      transaction={undefined}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {};
