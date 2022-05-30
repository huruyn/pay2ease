import '../../i18n/config';
import ViewEBills from './ViewEBills';

const ReactTestRenderer = require('react-test-renderer');

describe('ViewEBills Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ViewEBills />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
