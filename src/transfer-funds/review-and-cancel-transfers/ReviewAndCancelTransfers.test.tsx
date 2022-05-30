import React from 'react';
import ReviewAndCancelTransfers from './ReviewAndCancelTransfers';

const ReactTestRenderer = require('react-test-renderer');

describe('ReviewAndCancelTransfers Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ReviewAndCancelTransfers />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
