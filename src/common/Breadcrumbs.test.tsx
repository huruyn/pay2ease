import '../i18n/config';
import Breadcrumbs from './Breadcrumbs';

const ReactTestRenderer = require('react-test-renderer');

describe('Breadcrumbs Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<Breadcrumbs crumbs={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
