import React from 'react';
import Transactions from './Transactions';

const ReactTestRenderer = require('react-test-renderer');

describe('GetAlertedHeader Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <Transactions />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
