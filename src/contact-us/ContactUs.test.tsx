import '../i18n/config';
import ContactUs from './ContactUs';

const ReactTestRenderer = require('react-test-renderer');

describe('ContactUs Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ContactUs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
