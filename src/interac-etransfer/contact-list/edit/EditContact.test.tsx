import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import EditContact from './EditContact';

const ReactTestRenderer = require('react-test-renderer');

const CONTACT_MOCK = {
  key: 1,
  name: '392 Jones',
  firstName: '392',
  lastName: 'Jones',
  lang: 'English',
  email: 'lu_ben2002@yahoo.com',
  phone: '',
};

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    item: CONTACT_MOCK,
  }),
}));

describe('EditContact Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<BrowserRouter><EditContact /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render title', () => {
    const { container } = render(<BrowserRouter><EditContact /></BrowserRouter>);
    const setShow = jest.fn();
    React.useState = jest.fn().mockImplementationOnce((x) => [x, setShow]);

    expect(container).toMatchSnapshot();
  });
});
