import './i18n/config';
import Legal from './Legal';

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

describe('Legal Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<Legal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
