import '../../i18n/config';
import LearnMore from './LearnMore';

const ReactTestRenderer = require('react-test-renderer');

describe('LearnMore Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<LearnMore />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
