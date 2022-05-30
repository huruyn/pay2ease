import '../i18n/config';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomeLoggedOut from './HomeLoggedOut';

const ReactTestRenderer = require('react-test-renderer');

const mockUseMsal = jest.fn();
jest.mock('@azure/msal-react', () => ({
  useMsal: () => ({
    instance: {
      loginRedirect: () => mockUseMsal,
    },
  }),
}));

describe('HomeLoggedOut Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <HomeLoggedOut />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click buttons on HomeLoggedOut', () => {
    const { container } = render(
      <BrowserRouter>
        <HomeLoggedOut />
      </BrowserRouter>,
    );

    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(8);
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[3]);
    const headers = container.querySelectorAll('.sliderh2');
    expect(headers).toHaveLength(7);
  });
});
