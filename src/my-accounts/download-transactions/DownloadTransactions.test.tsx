import React from 'react';
import DownloadTransactions from './DownloadTransactions';

const ReactTestRenderer = require('react-test-renderer');

describe('GetAlertedHeader Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <DownloadTransactions />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
