import '../../i18n/config';
import DigitalVaultDocuments from './DigitalVaultDocuments';

const ReactTestRenderer = require('react-test-renderer');

describe('DigitalVaultDocuments Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<DigitalVaultDocuments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
