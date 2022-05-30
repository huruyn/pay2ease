import '../i18n/config';
import DateDropdowns from './DateDropdowns';

const ReactTestRenderer = require('react-test-renderer');

describe('DateDropdowns Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<DateDropdowns />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
