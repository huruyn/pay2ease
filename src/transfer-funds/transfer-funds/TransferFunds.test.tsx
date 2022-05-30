import React from 'react';
import TransferFunds from './TransferFunds';

const ReactTestRenderer = require('react-test-renderer');

describe('TransferFunds Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <TransferFunds />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
