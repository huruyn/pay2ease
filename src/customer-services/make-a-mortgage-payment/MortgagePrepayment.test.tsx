import '../../i18n/config';
import MortgagePrepayment from './MortgagePrepayment';

const ReactTestRenderer = require('react-test-renderer');

describe('MortgagePrepayment Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<MortgagePrepayment />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
