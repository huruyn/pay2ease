import '../../i18n/config';
import ContributeToTfsa from './ContributeToTfsa';

const ReactTestRenderer = require('react-test-renderer');

describe('ContributeToTfsa Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ContributeToTfsa />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
