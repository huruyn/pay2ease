import { render, fireEvent, screen } from '../../../../test-utils';
import CancelRequestForMoneyVerification from './CancelRequestForMoneyVerification';

const ReactTestRenderer = require('react-test-renderer');

describe('ٌRequest Sent Component', () => {
  it('matches the snapshot', () => {
    /** TODO: make this work */
    const tree = ReactTestRenderer.create(
      <div />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render CancelRequestForMoneyVerification', () => {
    const show = true;
    const handleCancelRequest = jest.fn();
    const handleBack = jest.fn();
    const transaction = undefined;
    render(
      <CancelRequestForMoneyVerification
        show={show}
        handleCancelRequest={handleCancelRequest}
        handleBack={handleBack}
        transaction={transaction}
        processing={false}
      />,
    );
    expect(screen.getByText('Cancel Request For Money - VERIFICATION')).toBeInTheDocument();
  });

  it('should click Back button on CancelRequestForMoneyVerification', () => {
    const show = true;
    const handleCancelRequest = jest.fn();
    const handleBack = jest.fn();
    const transaction = undefined;
    render(
      <CancelRequestForMoneyVerification
        show={show}
        handleCancelRequest={handleCancelRequest}
        handleBack={handleBack}
        transaction={transaction}
        processing={false}
      />,
    );

    fireEvent.click(screen.getByText('Back'));
    expect(handleBack).toBeCalled();
  });

  it('should click CancelRequest button on CancelRequestForMoneyVerification', () => {
    const show = true;
    const handleCancelRequest = jest.fn();
    const handleBack = jest.fn();
    const transaction = undefined;
    render(
      <CancelRequestForMoneyVerification
        show={show}
        handleCancelRequest={handleCancelRequest}
        handleBack={handleBack}
        transaction={transaction}
        processing={false}
      />,
    );

    fireEvent.click(screen.getByText('Cancel Request'));
    expect(handleCancelRequest).toBeCalled();
  });
});
