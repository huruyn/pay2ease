import '../../i18n/config';
import StopPayments from './StopPayments';

const ReactTestRenderer = require('react-test-renderer');

describe('StopPayments Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<StopPayments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
