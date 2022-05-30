import '../../i18n/config';
import BillPayments from './BillPayments';

const ReactTestRenderer = require('react-test-renderer');

describe('BillPayments Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<BillPayments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
