import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import ManageMyAlerts from './ManageMyAlerts';
import {
  EditBusinessPhoneContent,
} from './edit-business-phone/EditBusinessPhone';
import {
  EditHomePhoneContent,
} from './edit-home-phone/EditHomePhone';
import {
  EditMobilePhoneContent,
} from './edit-mobile-phone/EditMobilePhone';
import {
  EditEmailAccountContent,
} from './edit-email-account/EditEmailAccount';

const ReactTestRenderer = require('react-test-renderer');

describe('Manage Alert Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ManageMyAlerts />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render manage-my-alerts page', () => {
    const { container } = render(<ManageMyAlerts />);
    expect(container).toMatchSnapshot();
  });

  test('Click Edit Home Phone button  ', () => {
    jest.spyOn(React, 'useState');

    const { container } = render(<ManageMyAlerts />);
    const btnLinks = container.querySelectorAll('.btn-link');
    expect(btnLinks).toHaveLength(4);
    fireEvent.click(btnLinks[2]);
    fireEvent.click(btnLinks[0]);
    fireEvent.click(btnLinks[3]);
    fireEvent.click(btnLinks[1]);
    expect(React.useState).toHaveBeenCalled();
  });

  test('Click OK&Cancel buttons on EditHomePhone', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const { container } = render(
      <EditHomePhoneContent
        handleCancel={handleCancel}
        handleSave={handleSave}
      />,
    );
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(2);
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
  });

  test('Click OK&Cancel buttons on EditBusinessPhone', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const { container } = render(
      <EditBusinessPhoneContent
        handleCancel={handleCancel}
        handleSave={handleSave}
      />,
    );
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(2);
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
  });

  test('Click OK&Cancel buttons on EditMobilePhone', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    const handleCancel = jest.fn();
    const handleNext = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const { container } = render(
      <EditMobilePhoneContent
        handleCancel={handleCancel}
        handleNext={handleNext}
      />,
    );
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(2);
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
  });

  test('Click OK&Cancel buttons on EditEmailAccount', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const { container } = render(
      <EditEmailAccountContent
        handleCancel={handleCancel}
        handleSave={handleSave}
      />,
    );
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(2);
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
  });
});
