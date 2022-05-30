import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransactionStart from './TransactionStart';
import MAIN_INFO from '../../../stories/MainInfo';
import { SendMoneyStepsEnum } from '../../../constants/enum/SendMoneyStepsEnum';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';
import { Account, Contact } from '../../../api';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    stepId: 'details',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('TransactionStart Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
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
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
