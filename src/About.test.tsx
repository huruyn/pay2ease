import './i18n/config';
import About from './About';

const ReactTestRenderer = require('react-test-renderer');

describe('About Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
