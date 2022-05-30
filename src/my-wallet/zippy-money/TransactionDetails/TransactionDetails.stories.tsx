import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import TransactionDetails from './TransactionDetails';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';

export default {
  title: 'my-wallet/zippy-money/TransactionDetails',
  component: TransactionDetails,
} as ComponentMeta<typeof TransactionDetails>;

const Template: ComponentStory<typeof TransactionDetails> = () => (
  <BrowserRouter>
    <TransactionDetails transactionType={TransactionTypeEnum.SEND} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {};
