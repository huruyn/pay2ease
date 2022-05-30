import React from 'react';
import ZippyToZippy from './ZippyToZippy';

const ReactTestRenderer = require('react-test-renderer');

describe('ZippyToZippy Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ZippyToZippy />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
