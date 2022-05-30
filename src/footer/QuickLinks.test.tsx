import '../i18n/config';
import QuickLinks from './QuickLinks';

const ReactTestRenderer = require('react-test-renderer');

describe('QuickLinks Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<QuickLinks />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
