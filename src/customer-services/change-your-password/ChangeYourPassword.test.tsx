import '../../i18n/config';
import ChangeYourPassword from './ChangeYourPassword';

const ReactTestRenderer = require('react-test-renderer');

describe('ChangeYourPassword Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ChangeYourPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
