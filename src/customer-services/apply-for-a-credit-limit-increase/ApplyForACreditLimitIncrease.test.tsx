import '../../i18n/config';
import ApplyForACreditLimitIncrease from './ApplyForACreditLimitIncrease';

const ReactTestRenderer = require('react-test-renderer');

describe('ApplyForACreditLimitIncrease Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ApplyForACreditLimitIncrease />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
