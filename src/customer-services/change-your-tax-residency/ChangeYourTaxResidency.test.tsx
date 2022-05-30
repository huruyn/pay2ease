import '../../i18n/config';
import ChangeYourTaxResidency from './ChangeYourTaxResidency';

const ReactTestRenderer = require('react-test-renderer');

describe('ChangeYourTaxResidency Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ChangeYourTaxResidency />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
