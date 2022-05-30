import { render, fireEvent } from '../../../test-utils';

import RequestSent from './RequestSent';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Request Sent Component', () => {
  it('should click Send another transfer button', () => {
    const setCurrentStep = jest.fn();
    const setContactToSend = jest.fn();
    const setSelectedAccount = jest.fn();
    const setMainInfo = jest.fn();
    const navigateStep = jest.fn();
    const { container } = render(
      <RequestSent
        setCurrentStep={setCurrentStep}
        setContactToSend={setContactToSend}
        setSelectedAccount={setSelectedAccount}
        setMainInfo={setMainInfo}
        navigateStep={navigateStep}
      />,
    );
    fireEvent.click(container.querySelectorAll('.btn-danger')[0]);
    expect(setCurrentStep).toHaveBeenCalled();
    expect(setContactToSend).toHaveBeenCalled();
    expect(setSelectedAccount).toHaveBeenCalled();
    expect(setMainInfo).toHaveBeenCalled();
    expect(navigateStep).toHaveBeenCalled();
  });
});
