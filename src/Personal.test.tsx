import { renderWithProviders, fireEvent } from './test-utils';
import './i18n/config';
import Personal from './Personal';

const ReactTestRenderer = require('react-test-renderer');

const mockLoginRedirect = jest.fn();
jest.mock('@azure/msal-react', () => ({
  ...(jest.requireActual('@azure/msal-react') as any),
  useMsal: () => ({
    instance: {
      loginRedirect: mockLoginRedirect,
    },
  }),
}));

describe('Personal Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<Personal />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click a button on Personal', () => {
    const { container } = renderWithProviders(<Personal />);

    fireEvent.click(container.querySelectorAll('button')[0]);
    expect(mockLoginRedirect).toHaveBeenCalled();
  });
});
