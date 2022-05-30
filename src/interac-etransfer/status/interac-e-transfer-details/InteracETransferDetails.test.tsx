import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InteracETransferDetails from './InteracETransferDetails';

const ReactTestRenderer = require('react-test-renderer');

const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: mockChangeLanguage,
    },
    t: (key: string) => key,
  }),
}));

// @ts-ignore
window.API_URL = 'https://zippy-retail-api-dev.azurewebsites.net';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    tabId: 'received',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('InteracETransferDetails Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <InteracETransferDetails />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render InteracETransferDetails', () => {
    const { getByText } = render(
      <BrowserRouter>
        <InteracETransferDetails />
      </BrowserRouter>,
    );
    expect(getByText('Your Interac e-Transfer Details')).toBeInTheDocument();
  });

  it('should click buttons on InteracETransferDetails', () => {
    const { container } = render(
      <BrowserRouter>
        <InteracETransferDetails />
      </BrowserRouter>,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(container.querySelectorAll('#status-tab-tabpane-sent .btn')[0], mEvent);
    fireEvent.click(container.querySelectorAll('#status-tab-tabpane-requested .btn')[0], mEvent);

    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
