import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MakeALoanPayment from './MakeALoanPayment';

const ReactTestRenderer = require('react-test-renderer');

describe('MakeALoanPayment Page Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<MakeALoanPayment />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render and click options MakeALoanPayment', () => {
    const setSelectedRef = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setSelectedRef]);
    const { container } = render(<MakeALoanPayment />);

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
