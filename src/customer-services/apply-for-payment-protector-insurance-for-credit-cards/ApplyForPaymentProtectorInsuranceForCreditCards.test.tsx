import '../../i18n/config';
import ApplyForPaymentProtectorInsuranceForCreditCards from './ApplyForPaymentProtectorInsuranceForCreditCards';

const ReactTestRenderer = require('react-test-renderer');

describe('ApplyForPaymentProtectorInsuranceForCreditCards Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ApplyForPaymentProtectorInsuranceForCreditCards />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
