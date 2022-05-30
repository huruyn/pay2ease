import '../../i18n/config';
import CreateOrEditAccountNickname from './CreateOrEditAccountNickname';

const ReactTestRenderer = require('react-test-renderer');

describe('CreateOrEditAccountNickname Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<CreateOrEditAccountNickname />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
