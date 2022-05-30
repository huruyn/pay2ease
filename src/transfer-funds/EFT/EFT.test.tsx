import React from 'react';
import EFT from './EFT';

const ReactTestRenderer = require('react-test-renderer');

describe('EFT Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <EFT />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
