import React from 'react';
import TransactionStatus from './TransactionStatus';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('TransactionStatus Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <TransactionStatus />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
