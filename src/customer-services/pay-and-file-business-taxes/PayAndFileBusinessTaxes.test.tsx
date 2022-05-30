import '../../i18n/config';
import PayAndFileBusinessTaxes from './PayAndFileBusinessTaxes';

const ReactTestRenderer = require('react-test-renderer');

describe('PayAndFileBusinessTaxes Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<PayAndFileBusinessTaxes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
