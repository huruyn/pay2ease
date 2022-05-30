import '../../i18n/config';
import SetUpBillPayments from './SetUpBillPayments';

const ReactTestRenderer = require('react-test-renderer');

describe('SetUpBillPayments Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<SetUpBillPayments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
