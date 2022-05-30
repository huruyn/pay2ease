import React from 'react';
import InactiveAlertNote from './InactiveAlertNote';

const ReactTestRenderer = require('react-test-renderer');

describe('InactiveAlertNote Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <InactiveAlertNote />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
