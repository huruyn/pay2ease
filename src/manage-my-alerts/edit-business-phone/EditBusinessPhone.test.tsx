import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { EditBusinessPhoneContent } from './EditBusinessPhone';

const ReactTestRenderer = require('react-test-renderer');

describe('EditBusinessPhone Component', () => {
  it('matches the snapshot', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const tree = ReactTestRenderer.create(
      <EditBusinessPhoneContent handleSave={handleSave} handleCancel={handleCancel} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Click cancel button on EditBusinessPhone', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditBusinessPhoneContent handleSave={handleSave} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btnElements = container.querySelectorAll('#cancel-btn-edit-business-phone');
    expect(btnElements).toHaveLength(1);
    fireEvent.click(btnElements[0], mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditBusinessPhone', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditBusinessPhoneContent handleSave={handleSave} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btnElements = container.querySelectorAll('#save-btn-edit-business-phone');
    expect(btnElements).toHaveLength(1);
    fireEvent.click(btnElements[0], mEvent);
    expect(handleSave).toBeCalledTimes(1);
  });
});
