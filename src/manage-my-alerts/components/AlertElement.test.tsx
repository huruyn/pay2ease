import React from 'react';
import AlertElement from './AlertElement';

const ReactTestRenderer = require('react-test-renderer');

describe('AlertElement Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <AlertElement text="test" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
