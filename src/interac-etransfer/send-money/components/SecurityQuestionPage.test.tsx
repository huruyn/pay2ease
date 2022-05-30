import { render, fireEvent } from '../../../test-utils';

import SecurityQuestionPage from './SecurityQuestionPage';
import MAIN_INFO from '../../../stories/MainInfo';

const mockShowModal = jest.fn();
const mockNavigateSteps = jest.fn();
const mockSetMainInfo = jest.fn();
const mockSetErrorMessage = jest.fn();
const mockSetCurrentStep = jest.fn();

const component = (
  <SecurityQuestionPage
    showModal={mockShowModal}
    navigateSteps={mockNavigateSteps}
    setMainInfo={mockSetMainInfo}
    setErrorMessage={mockSetErrorMessage}
    setCurrentStep={mockSetCurrentStep}
    mainInfo={MAIN_INFO}
  />
);

describe('Security Question Page Component', () => {
  it('should render SecurityQuestionPage', () => {
    render(component);
    expect(component).toMatchSnapshot();
  });

  it('Click next button on Security Question Page', () => {
    const { container } = render(
      <SecurityQuestionPage
        showModal={mockShowModal}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        setErrorMessage={mockSetErrorMessage}
        setCurrentStep={mockSetCurrentStep}
        mainInfo={MAIN_INFO}
      />,
    );
    fireEvent.click(container.querySelectorAll('.zippy-btn')[0]);
    expect(mockNavigateSteps).toBeCalledTimes(1);
  });

  it('change FormControl text values', () => {
    const { container } = render(
      <SecurityQuestionPage
        showModal={mockShowModal}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        setErrorMessage={mockSetErrorMessage}
        setCurrentStep={mockSetCurrentStep}
        mainInfo={{ ...MAIN_INFO, confirmSecurityAnswer: '' }}
      />,
    );
    fireEvent.change(container.querySelectorAll('.form-control')[0], {
      target: { value: 'Test Text' },
    });
    fireEvent.change(container.querySelectorAll('.form-control')[1], {
      target: { value: 'Test Text' },
    });
    fireEvent.change(container.querySelectorAll('.form-control')[2], {
      target: { value: 'Test Text' },
    });
    fireEvent.change(
      container.querySelectorAll('.is-show-answer .form-check-input')[0],
      { target: { value: true } },
    );
    expect(mockSetMainInfo).toBeCalledTimes(3);

    fireEvent.click(container.querySelectorAll('.btn-light')[0]);
    expect(mockNavigateSteps).toBeCalledTimes(1);
  });
});
