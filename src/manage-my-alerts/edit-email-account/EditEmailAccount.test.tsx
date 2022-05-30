import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EditEmailAccountContent } from './EditEmailAccount';

const ReactTestRenderer = require('react-test-renderer');

describe('EditEmailAccount Component', () => {
  it('matches the snapshot', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const tree = ReactTestRenderer.create(
      <EditEmailAccountContent handleSave={handleSave} handleCancel={handleCancel} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Click cancel button on EditEmailAccount', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditEmailAccountContent handleSave={handleSave} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btnElements = container.querySelectorAll('#cancel-btn-edit-email-account');
    expect(btnElements).toHaveLength(1);
    fireEvent.click(btnElements[0], mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditEmailAccount', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditEmailAccountContent handleSave={handleSave} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btnElements = container.querySelectorAll('#save-btn-edit-email-account');
    expect(btnElements).toHaveLength(1);
    fireEvent.click(btnElements[0], mEvent);
    expect(handleSave).toBeCalledTimes(1);
  });
});
