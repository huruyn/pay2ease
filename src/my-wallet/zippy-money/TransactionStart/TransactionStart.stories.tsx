import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import TransactionStart from './TransactionStart';
import MAIN_INFO from '../../../stories/MainInfo';
import { SendMoneyStepsEnum } from '../../../constants/enum/SendMoneyStepsEnum';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';
import { Account, Contact } from '../../../api';

export default {
  title: 'my-wallet/zippy-money/TransactionStart',
  component: TransactionStart,
} as ComponentMeta<typeof TransactionStart>;

const Template: ComponentStory<typeof TransactionStart> = () => (
  <BrowserRouter>
    <TransactionStart
      accountsList={[]}
      contactList={[]}
      setContactList={jest.fn()}
      errorMessage=""
      handleTriggerTransaction={undefined}
      isProcessing={false}
      mainInfo={MAIN_INFO}
      selectedAccount={{} as Account}
      selectedContact={{} as Contact}
      setMainInfo={jest.fn()}
      setSelectedAccount={jest.fn()}
      setSelectedContact={jest.fn()}
      step={SendMoneyStepsEnum.TRANSACTION_START}
      transactionType={TransactionTypeEnum.SEND}
      setTunnelType={jest.fn()}
    />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {};

export const APIError = Template.bind({});
APIError.args = {};
APIError.parameters = {};
