import { renderWithProviders, fireEvent } from './test-utils';
import './i18n/config';

import Business from './Business';

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

describe('Business Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<Business />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click a button on business', () => {
    const { container } = renderWithProviders(<Business />);

    fireEvent.click(container.querySelectorAll('button')[0]);
    expect(mockLoginRedirect).toHaveBeenCalled();
  });
});
