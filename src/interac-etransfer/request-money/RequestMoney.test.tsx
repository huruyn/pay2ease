import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders, fireEvent } from '../../test-utils';
import RequestMoney from './RequestMoney';

const ReactTestRenderer = require('react-test-renderer');

describe('Request Money Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<BrowserRouter><RequestMoney /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should click next step button', () => {
    const { container } = renderWithProviders(<RequestMoney />);
    fireEvent.click(container.querySelectorAll('div[role="button"]')[0]);
  });
});
