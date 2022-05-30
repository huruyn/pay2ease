import React from 'react';
import MyAccounts from './MyAccounts';

const ReactTestRenderer = require('react-test-renderer');

describe('GetAlertedHeader Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <MyAccounts />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
