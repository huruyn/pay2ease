import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import TransactionComplete from './TransactionComplete';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';

export default {
  title: 'my-wallet/zippy-money/TransactionComplete',
  component: TransactionComplete,
} as ComponentMeta<typeof TransactionComplete>;

const Template: ComponentStory<typeof TransactionComplete> = () => (
  <BrowserRouter>
    <TransactionComplete transactionType={TransactionTypeEnum.SEND} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {};
