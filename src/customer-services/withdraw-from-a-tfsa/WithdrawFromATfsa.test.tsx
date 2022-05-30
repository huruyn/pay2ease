import '../../i18n/config';
import WithdrawFromATfsa from './WithdrawFromATfsa';

const ReactTestRenderer = require('react-test-renderer');

describe('WithdrawFromATfsa Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<WithdrawFromATfsa />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
