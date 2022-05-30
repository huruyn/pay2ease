import '../../i18n/config';
import ApplyForOrChangeOverdraftProtectionService from './ApplyForOrChangeOverdraftProtectionService';

const ReactTestRenderer = require('react-test-renderer');

describe('ApplyForOrChangeOverdraftProtectionService Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ApplyForOrChangeOverdraftProtectionService />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
