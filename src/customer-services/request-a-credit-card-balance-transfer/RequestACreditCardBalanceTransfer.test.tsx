import '../../i18n/config';
import RequestACreditCardBalanceTransfer from './RequestACreditCardBalanceTransfer';

const ReactTestRenderer = require('react-test-renderer');

describe('RequestACreditCardBalanceTransfer Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<RequestACreditCardBalanceTransfer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
