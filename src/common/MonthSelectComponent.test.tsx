import { render, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';
import MonthSelectComponent from './MonthSelectComponent';

const ReactTestRenderer = require('react-test-renderer');

describe('MonthSelectComponent Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <MonthSelectComponent currentDate={DateTime.utc()} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render options inside a MonthSelectComponent', () => {
    const { container } = render(
      <MonthSelectComponent currentDate={DateTime.utc()} />,
    );
    const options = container.querySelectorAll('option');
    expect(options).toHaveLength(12);
  });

  it('Click MonthSelectComponent Component', () => {
    const onChange = jest.fn();
    const { container } = render(
      <MonthSelectComponent onChange={onChange} currentDate={DateTime.utc()} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const optionElements = container.querySelectorAll('.month-select-comp');
    expect(optionElements).toHaveLength(1);
    fireEvent.change(optionElements[0], mEvent);
    expect(onChange).toBeCalledTimes(1);
  });
});
