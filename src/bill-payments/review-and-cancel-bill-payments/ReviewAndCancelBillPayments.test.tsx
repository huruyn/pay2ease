import '../../i18n/config';
import ReviewAndCancelBillPayments from './ReviewAndCancelBillPayments';

const ReactTestRenderer = require('react-test-renderer');

describe('ReviewAndCancelBillPayments Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ReviewAndCancelBillPayments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
