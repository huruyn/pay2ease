import '../i18n/config';
import AmountInput from './AmountInput';

const ReactTestRenderer = require('react-test-renderer');

describe('AmountInput Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <AmountInput
        amount={0}
        setAmount={jest.fn()}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
