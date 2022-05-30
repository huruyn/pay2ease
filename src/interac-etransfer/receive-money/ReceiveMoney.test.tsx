import { render, fireEvent } from '../../test-utils';
import ReceiveMoney from './ReceiveMoney';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ReceiveMoney Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<ReceiveMoney />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render ReceiveMoney', () => {
    const { container } = render(<ReceiveMoney />);
    expect(container).toMatchSnapshot();
  });

  it('should navigate when click buttons', () => {
    const { container } = render(<ReceiveMoney />);
    fireEvent.click(container.querySelectorAll('button')[0]);
    fireEvent.click(container.querySelectorAll('button')[1]);
    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
