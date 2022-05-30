import '../../../i18n/config';
import Contacts from './Contacts';

const ReactTestRenderer = require('react-test-renderer');

describe('Contacts Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <Contacts />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
