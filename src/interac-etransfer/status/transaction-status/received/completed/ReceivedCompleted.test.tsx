import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReceivedCompleted from './ReceivedCompleted';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ReceivedCompleted Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <ReceivedCompleted
          transaction={undefined}
          user={undefined}
          setCurrentStatus={undefined}
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render ReceivedCompleted', () => {
    render(
      <BrowserRouter>
        <ReceivedCompleted
          transaction={undefined}
          user={undefined}
          setCurrentStatus={undefined}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText('From')).toBeInTheDocument();
    expect(screen.getByText('To')).toBeInTheDocument();
    expect(screen.getByText('Transfer Date')).toBeInTheDocument();
    expect(screen.getByText('Transfer Amount')).toBeInTheDocument();
    expect(screen.getByText('Reference Number')).toBeInTheDocument();
  });
});
