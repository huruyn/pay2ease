import '../../i18n/config';
import RemoveAssociationToOnlineInvestmentAccount from './RemoveAssociationToOnlineInvestmentAccount';

const ReactTestRenderer = require('react-test-renderer');

describe('RemoveAssociationToOnlineInvestmentAccount Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<RemoveAssociationToOnlineInvestmentAccount />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
