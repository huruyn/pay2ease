import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '../../test-utils';
import SendMoney from './SendMoney';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    stepId: 'details',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('SendMoney Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <SendMoney />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render StepComponent inside a SendMoney', () => {
    render(
      <BrowserRouter>
        <SendMoney />
      </BrowserRouter>,
    );
    expect(screen.getByText('Steps:')).toBeInTheDocument();
  });

  test('should render DetailsPage inside a SendMoney', () => {
    render(
      <BrowserRouter>
        <SendMoney />
      </BrowserRouter>,
    );
    expect(
      screen.getByText('Your Interac e-Transfer Details'),
    ).toBeInTheDocument();
  });

  test('change user account and click buttons', () => {
    const { container } = render(
      <BrowserRouter>
        <SendMoney />
      </BrowserRouter>,
    );
    expect(
      screen.getByText('Your Interac e-Transfer Details'),
    ).toBeInTheDocument();
    fireEvent.change(container.querySelectorAll('.send-account-select')[0], {
      target: { value: 2 },
    });
    fireEvent.click(container.querySelectorAll('div[role="button"]')[1]);
  });
});
