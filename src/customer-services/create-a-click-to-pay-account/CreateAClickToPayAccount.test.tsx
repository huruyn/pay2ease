import '../../i18n/config';
import CreateAClickToPayAccount from './CreateAClickToPayAccount';

const ReactTestRenderer = require('react-test-renderer');

describe('CreateAClickToPayAccount Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<CreateAClickToPayAccount />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
