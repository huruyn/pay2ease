import React from 'react';
import PanelHeader from './PanelHeader';

const ReactTestRenderer = require('react-test-renderer');

describe('GetAlertedHeader Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <PanelHeader title="Test Title" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
