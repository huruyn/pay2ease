import AccountSecurity from './AccountSecurity';

const ReactTestRenderer = require('react-test-renderer');

describe('Legal Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<AccountSecurity />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
