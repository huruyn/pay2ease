import { BrowserRouter } from 'react-router-dom';
import { ZippyBalancePure } from './ZippyBalance';

const ReactTestRenderer = require('react-test-renderer');

describe('ZippyBalance Component', () => {
  it('matches the snapshot when loaded', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <ZippyBalancePure account={{ id: 1, name: '8000 001 000000000', balance: 1000 }} />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when loading', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <ZippyBalancePure account={undefined} />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
