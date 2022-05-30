import '../../i18n/config';
import ChangeYourContactInformation from './ChangeYourContactInformation';

const ReactTestRenderer = require('react-test-renderer');

describe('ChangeYourContactInformation Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ChangeYourContactInformation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
