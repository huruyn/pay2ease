import '../i18n/config';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const ReactTestRenderer = require('react-test-renderer');

jest.mock('@azure/msal-react', () => ({
  useIsAuthenticated: () => true,
}));

describe('Home Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<BrowserRouter><Home /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render home component', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });
});
