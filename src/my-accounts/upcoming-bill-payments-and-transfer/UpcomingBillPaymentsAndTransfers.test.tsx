import React from 'react';
import UpcomingBillPaymentsAndTransfers from './UpcomingBillPaymentsAndTransfers';

const ReactTestRenderer = require('react-test-renderer');

describe('UpcomingBillPaymentsAndTransfers Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <UpcomingBillPaymentsAndTransfers />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
