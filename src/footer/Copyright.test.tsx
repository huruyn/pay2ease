import '../i18n/config';
import Copyright from './Copyright';

const ReactTestRenderer = require('react-test-renderer');

describe('Copyright Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<Copyright />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
