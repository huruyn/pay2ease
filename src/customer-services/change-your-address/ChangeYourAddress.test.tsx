import '../../i18n/config';
import ChangeYourAddress from './ChangeYourAddress';

const ReactTestRenderer = require('react-test-renderer');

describe('ChangeYourAddress Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ChangeYourAddress />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
