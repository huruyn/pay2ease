import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ZippyTransaction from './ZippyTransaction';
import { store } from '../../app/store';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    stepId: 'details',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ZippyTransaction Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ZippyTransaction />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
