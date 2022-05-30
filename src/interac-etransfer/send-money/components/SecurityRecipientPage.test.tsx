import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import SecurityRecipientPage from './SecurityRecipientPage';

const ReactTestRenderer = require('react-test-renderer');

describe('Security Recipient Page Component', () => {
  it('matches the snapshot', () => {
    const showModal = jest.fn();
    const tree = ReactTestRenderer.create(
      <SecurityRecipientPage showModal={showModal} navigateSteps={jest.fn()} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Click next button on Security Recipient Page', () => {
    const showModal = jest.fn();
    const { container } = render(
      <SecurityRecipientPage showModal={showModal} navigateSteps={jest.fn()} />,
    );

    fireEvent.click(container.querySelectorAll('.btn-danger')[0]);
    expect(showModal).toBeCalledTimes(1);
  });

  it('Click back button on Security Recipient Page', () => {
    const setCurrentStep = jest.fn();
    const { container } = render(
      <SecurityRecipientPage
        navigateSteps={jest.fn()}
        setCurrentStep={setCurrentStep}
      />,
    );
    fireEvent.click(container.querySelectorAll('.btn-outline-danger')[0]);
    expect(setCurrentStep).toBeCalledTimes(1);
  });
});
