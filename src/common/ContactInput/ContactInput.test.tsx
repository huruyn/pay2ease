import '../../i18n/config';
import ContactInput from './ContactInput';

const ReactTestRenderer = require('react-test-renderer');

describe('ContactInput Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ContactInput />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
