import '../../i18n/config';
import AddOrEditBillers from './AddOrEditBillers';

const ReactTestRenderer = require('react-test-renderer');

describe('AddOrEditBillers Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<AddOrEditBillers />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
