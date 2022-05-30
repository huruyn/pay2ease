import '../../../i18n/config';
import AddContact from './AddContact';

const ReactTestRenderer = require('react-test-renderer');

describe('AddContact Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <AddContact />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
