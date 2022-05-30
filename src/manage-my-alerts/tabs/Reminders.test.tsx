import React from 'react';
import Reminders from './Reminders';

const ReactTestRenderer = require('react-test-renderer');

describe('GetAlertedHeader Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <Reminders />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
