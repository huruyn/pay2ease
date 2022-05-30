import '../../i18n/config';
import BillerDetails from './BillerDetails';

const ReactTestRenderer = require('react-test-renderer');

describe('BillerDetails Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<BillerDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
