import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { ModalContent } from './IdentityVerificationModal';

const ReactTestRenderer = require('react-test-renderer');

const CONTACT_MOCK = {
  key: 1,
  name: '392 Jones',
  lang: 'English',
  email: 'lu_ben2002@yahoo.com',
  phone: '',
};

describe('IdentityVerificationModal Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ModalContent
        step={0}
        handleBack={jest.fn()}
        closeMethod={jest.fn()}
        handleNext={jest.fn()}
        selectedContact={CONTACT_MOCK}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render title', () => {
    const { getByText } = render(
      <ModalContent
        step={0}
        handleBack={jest.fn()}
        closeMethod={jest.fn()}
        handleNext={jest.fn()}
        selectedContact={CONTACT_MOCK}
      />,
    );
    expect(getByText('EDIT CONTACT - Verification')).toBeInTheDocument();
  });

  it('click VerificationStep buttons', () => {
    const handleBack = jest.fn();
    const closeMethod = jest.fn();
    const handleNext = jest.fn();
    const { container } = render(
      <ModalContent
        step={0}
        handleBack={handleBack}
        closeMethod={closeMethod}
        handleNext={handleNext}
        selectedContact={CONTACT_MOCK}
      />,
    );
    fireEvent.click(container.querySelectorAll('.btn-link')[0]);
    fireEvent.click(container.querySelectorAll('button')[0]);
    fireEvent.click(container.querySelectorAll('button')[1]);

    expect(handleBack).toHaveBeenCalled();
    expect(closeMethod).toHaveBeenCalled();
  });

  it('click SendCodeStep buttons', () => {
    const handleBack = jest.fn();
    const closeMethod = jest.fn();
    const handleNext = jest.fn();
    const { container } = render(
      <ModalContent
        step={1}
        handleBack={handleBack}
        closeMethod={closeMethod}
        handleNext={handleNext}
        selectedContact={CONTACT_MOCK}
      />,
    );
    fireEvent.click(container.querySelectorAll('.btn-link')[0]);
    fireEvent.click(container.querySelectorAll('.btn-outline-danger')[0]);
  });
});
