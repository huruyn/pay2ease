import '../../i18n/config';
import AddCardHolder from './AddCardHolder';

const ReactTestRenderer = require('react-test-renderer');

describe('AddCardHolder Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<AddCardHolder />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
