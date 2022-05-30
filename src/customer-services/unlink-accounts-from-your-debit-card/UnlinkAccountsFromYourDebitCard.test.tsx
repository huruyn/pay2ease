import '../../i18n/config';
import UnlinkAccountsFromYourDebitCard from './UnlinkAccountsFromYourDebitCard';

const ReactTestRenderer = require('react-test-renderer');

describe('UnlinkAccountsFromYourDebitCard Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<UnlinkAccountsFromYourDebitCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
