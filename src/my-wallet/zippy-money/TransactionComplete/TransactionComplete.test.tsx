import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransactionComplete from './TransactionComplete';
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

describe('TransactionComplete Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <TransactionComplete transactionType={TransactionTypeEnum.SEND} />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
