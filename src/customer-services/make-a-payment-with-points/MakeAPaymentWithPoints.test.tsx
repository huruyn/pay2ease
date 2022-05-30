import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MakeAPaymentWithPoints from './MakeAPaymentWithPoints';

const ReactTestRenderer = require('react-test-renderer');

describe('MortgagePrepayment Page Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<MakeAPaymentWithPoints />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render MakeAPaymentWithPoints', () => {
    const setSelectedRef = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setSelectedRef]);
    const { container } = render(<MakeAPaymentWithPoints />);

    const mEvent = { preventDefault: jest.fn() };
    const keyEvent = { key: 'Enter' };
    expect(container.querySelectorAll('.option-btn')).toHaveLength(2);
    fireEvent.click(container.querySelectorAll('.option-btn')[0], mEvent);
    fireEvent.click(container.querySelectorAll('.option-btn')[1], mEvent);
    fireEvent.keyDown(container.querySelectorAll('.option-btn')[0], keyEvent);
    fireEvent.keyDown(container.querySelectorAll('.option-btn')[1], keyEvent);
    expect(setSelectedRef).toBeCalledTimes(4);
  });
});
