import { render } from '@testing-library/react';
import { ModalContent } from './SendMoneyVerificationModal';
import { isValidEmail } from '../helpers/Validators';

const ReactTestRenderer = require('react-test-renderer');

describe('SendMoneyVerificationModal Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ModalContent
        transferDetails={{
          source: { name: 'source' },
          destination: { firstName: 'firstName', lastName: 'lastName', email: 'destination@zippy.cash' },
          fromAccount: 'Personal (8000 001 000000000) $1,747.46',
          amount: 10000,
        }}
        isSendingMoney={false}
        handleBack={jest.fn()}
        handleClose={jest.fn()}
        handleNext={jest.fn()}
        show
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have valid informations', () => {
    const { container } = render(
      <ModalContent
        transferDetails={{
          source: { name: 'source' },
          destination: { firstName: 'firstName', lastName: 'lastName', email: 'destination@zippy.cash' },
          fromAccount: 'Personal (8000 001 000000000) $1,747.46',
          amount: 10000,
        }}
        isSendingMoney={false}
        handleBack={jest.fn()}
        handleClose={jest.fn()}
        handleNext={jest.fn()}
        show
      />,
    );
    const labels = container.querySelectorAll('p');
    expect(labels[3].innerHTML).toEqual('source');
    expect(labels[5].innerHTML).toEqual('firstName lastName');
    expect(labels[6].innerHTML).toEqual('destination@zippy.cash');
    expect(labels[8].innerHTML).toEqual('$10,000.00');
    expect(labels[10].innerHTML).toEqual('Personal (8000 001 000000000) $1,747.46');
    expect(isValidEmail(labels[6].innerHTML)).toBeTruthy();
  });
});
