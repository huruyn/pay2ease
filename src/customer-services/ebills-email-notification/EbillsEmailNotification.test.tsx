import '../../i18n/config';
import EbillsEmailNotification from './EbillsEmailNotification';

const ReactTestRenderer = require('react-test-renderer');

describe('EbillsEmailNotification Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<EbillsEmailNotification />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
