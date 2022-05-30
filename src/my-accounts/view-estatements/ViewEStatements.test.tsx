import React from 'react';
import ViewEStatements from './ViewEStatements';

const ReactTestRenderer = require('react-test-renderer');

describe('ViewEStatements Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ViewEStatements />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
