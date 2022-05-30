import React from 'react';
import StatementPreferences from './StatementPreferences';

const ReactTestRenderer = require('react-test-renderer');

describe('StatementPreferences Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <StatementPreferences />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
