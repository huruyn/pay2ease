import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditMobilePhoneContent } from './EditMobilePhone';

const ReactTestRenderer = require('react-test-renderer');

describe('EditMobilePhone Component', () => {
  it('matches the snapshot', () => {
    const handleCancel = jest.fn();
    const handleNext = jest.fn();
    const tree = ReactTestRenderer.create(
      <EditMobilePhoneContent handleNext={handleNext} handleCancel={handleCancel} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Click cancel button on EditMobilePhone', () => {
    const handleCancel = jest.fn();
    const handleNext = jest.fn();
    const { container } = render(
      <EditMobilePhoneContent handleNext={handleNext} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btnElements = container.querySelectorAll('#cancel-btn-edit-mobile-phone');
    expect(btnElements).toHaveLength(1);
    fireEvent.click(btnElements[0], mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditMobilePhone', () => {
    const handleClose = jest.fn();
    const handleNext = jest.fn();
    const { container } = render(
      <EditMobilePhoneContent handleNext={handleNext} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btnElements = container.querySelectorAll('#next-btn-edit-mobile-phone');
    expect(btnElements).toHaveLength(1);
    fireEvent.click(btnElements[0], mEvent);
    expect(handleNext).toBeCalledTimes(1);
  });
});
