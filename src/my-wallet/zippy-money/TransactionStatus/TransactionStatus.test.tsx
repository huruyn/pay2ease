import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransactionStatus from './TransactionStatus';
import { TransactionTypeEnum } from '../../../constants/enum/TransactionTypeEnum';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    stepId: 'details',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('TransactionStatus Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <TransactionStatus
          transactionType={TransactionTypeEnum.SEND}
          transaction={undefined}
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
