import '../../i18n/config';
import OrderCheques from './OrderCheques';

const ReactTestRenderer = require('react-test-renderer');

describe('OrderCheques Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<OrderCheques />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
