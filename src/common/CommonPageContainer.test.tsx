import '../i18n/config';
import CommonPageContainer from './CommonPageContainer';

const ReactTestRenderer = require('react-test-renderer');

describe('CommonPageContainer Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <CommonPageContainer title="sample">
        <div>test</div>
      </CommonPageContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
