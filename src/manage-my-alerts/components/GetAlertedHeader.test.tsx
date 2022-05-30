import React from 'react';
import GetAlertedHeader from './GetAlertedHeader';

const ReactTestRenderer = require('react-test-renderer');

describe('GetAlertedHeader Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <GetAlertedHeader />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
