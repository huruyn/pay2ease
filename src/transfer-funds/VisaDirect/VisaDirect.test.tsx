import React from 'react';
import VisaDirect from './VisaDirect';

const ReactTestRenderer = require('react-test-renderer');

describe('VisaDirect Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <VisaDirect />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
