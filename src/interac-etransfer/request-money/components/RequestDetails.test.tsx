import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { formatContactName } from '../../../Helpers';
import ACCOUNTS from '../../../stories/Accounts';
import CONTACTS from '../../../stories/Contacts';
import RequestDetails from './RequestDetails';
import { RequestMainDetails } from '../RequestMoney';

const mockSetCurrentStep = jest.fn();

const mainInfo = {
  amount: 0,
  invoiceNumber: 0,
  message: '',
  notifyByEmail: false,
  notifyTextMessage: false,
  agree: false,
} as unknown as RequestMainDetails;

const component = (
  <BrowserRouter>
    <RequestDetails
      accounts={ACCOUNTS}
      contacts={CONTACTS}
      mainInfo={mainInfo}
      selectedAccount={0}
      selectedContact={0}
      setContactToSend={mockSetCurrentStep}
      setErrorMessage={mockSetCurrentStep}
      setMainInfo={mockSetCurrentStep}
      setSelectedAccount={mockSetCurrentStep}
      validateInputs={jest.fn()}
      navigateStep={jest.fn()}
    />
  </BrowserRouter>
);
const componentWithoutData = (
  <BrowserRouter>
    <RequestDetails
      accounts={[]}
      contacts={[]}
      mainInfo={mainInfo}
      selectedAccount={0}
      selectedContact={0}
      setContactToSend={mockSetCurrentStep}
      setErrorMessage={mockSetCurrentStep}
      setMainInfo={mockSetCurrentStep}
      setSelectedAccount={mockSetCurrentStep}
      validateInputs={jest.fn()}
      navigateStep={jest.fn()}
    />
  </BrowserRouter>
);

beforeEach(cleanup);

describe('RequestDetail Component', () => {
  it('should render RequestDetail', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });
  it('should not  render any form in beginging ', () => {
    render(component);
    expect(screen.queryAllByText('Notify By:')).toHaveLength(0);
  });
  it('should render Email Form  when user Has an Email ', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['1']);
  });
  it('should render Text Form  when user Has a Phone ', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['1']);
  });
  it('should render accountFrom with null when no there is no contact ', () => {
    render(componentWithoutData);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['']);
    expect(requestMoneyFrom[0].textContent).toEqual('Select');
  });
  it('should render accountFrom with contact when  chossing  a contact ', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['2']);
    const fullName = formatContactName(
      CONTACTS[2].firstName,
      CONTACTS[2].lastName,
    );
    expect(requestMoneyFrom[0].textContent).toContain(fullName);
  });
  it('should click next step button', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['1']);
    expect(mockSetCurrentStep).toHaveBeenCalled();
  });
  it('should render select with Contact Details', () => {
    render(component);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['1']);
    expect(requestMoneyFrom[0].children.length).toEqual(6);
  });
  it('should only render the default select when Contact is null', () => {
    render(componentWithoutData);
    const requestMoneyFrom = screen.getAllByRole('combobox');
    userEvent.selectOptions(requestMoneyFrom[0], ['']);
    expect(requestMoneyFrom[0].children.length).toEqual(1);
  });
});
