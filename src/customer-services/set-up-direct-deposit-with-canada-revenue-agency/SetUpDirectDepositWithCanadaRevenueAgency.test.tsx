import '../../i18n/config';
import SetUpDirectDepositWithCanadaRevenueAgency from './SetUpDirectDepositWithCanadaRevenueAgency';

const ReactTestRenderer = require('react-test-renderer');

describe('SetUpDirectDepositWithCanadaRevenueAgency Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<SetUpDirectDepositWithCanadaRevenueAgency />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
