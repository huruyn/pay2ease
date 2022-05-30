import '../../i18n/config';
import ChangeMortgagePaymentDetails from './ChangeMortgagePaymentDetails';

const ReactTestRenderer = require('react-test-renderer');

describe('ChangeMortgagePaymentDetails Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ChangeMortgagePaymentDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
