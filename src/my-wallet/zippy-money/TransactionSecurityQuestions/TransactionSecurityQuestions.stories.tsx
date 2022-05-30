import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import TransactionSecurityQuestions from './TransactionSecurityQuestions';
import MAIN_INFO from '../../../stories/MainInfo';

export default {
  title: 'my-wallet/zippy-money/TransactionSecurityQuestions',
  component: TransactionSecurityQuestions,
} as ComponentMeta<typeof TransactionSecurityQuestions>;

const Template: ComponentStory<typeof TransactionSecurityQuestions> = () => (
  <BrowserRouter>
    <TransactionSecurityQuestions
      mainInfo={MAIN_INFO}
      setMainInfo={jest.fn()}
      isProcessing={false}
      handleTriggerTransaction={jest.fn()}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {};
