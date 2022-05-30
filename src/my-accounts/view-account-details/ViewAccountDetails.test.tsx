import React from 'react';
import ViewAccountDetails from './ViewAccountDetails';

const ReactTestRenderer = require('react-test-renderer');

describe('ViewAccountDetails Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ViewAccountDetails />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
