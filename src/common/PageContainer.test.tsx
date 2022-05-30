import '../i18n/config';
import PageContainer from './PageContainer';

const ReactTestRenderer = require('react-test-renderer');

describe('PageContainer Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <PageContainer title="sample">
        <div>test</div>
      </PageContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
